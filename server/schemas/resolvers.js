const { AuthenticationError } = require("apollo-server-express");
const {
  User,
  Review,
  Restaurant,
  PurchasedItem,
  Order,
  MenuItem,
} = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      if (context.user && context.user._id) {
        const user = await User.findById(context.user._id)
          .populate({
            path: "pastOrders",
            populate: {
              path: "cart.menuItem",
            },
          })
          .populate("reviews");

        return user;
      }

      throw new AuthenticationError("Not logged in");
    },

    allMenuItems: async () => {
      const menuItems = await MenuItem.find({}).populate({
        path: "reviews",
        populate: {
          path: "user",
        },
      });
      return menuItems;
    },

    menuItem: async (parent, { _id }) => {
      return await MenuItem.findById(_id).populate({
        path: "reviews",
        populate: {
          path: "user",
        },
      });
    },

    allRestaurants: async () => {
      const restaurants = await Restaurant.find({})
        .populate({
          path: "menu",
          populate: {
            path: "reviews",
            populate: {
              path: "user",
            },
          },
        })
        .populate({
          path: "reviews",
          populate: {
            path: "user",
          },
        });
      return restaurants;
    },

    restaurants: async (parent, { searchTerm, tag }) => {
      const params = {};

      if (tag) {
        params.tags = tag;
      }

      if (searchTerm) {
        params.name = {
          $regex: searchTerm,
          $options: "i",
        };
      }

      return await Restaurant.find(params)
        .populate({
          path: "menu",
          populate: {
            path: "reviews",
            populate: {
              path: "user",
            },
          },
        })
        .populate({
          path: "reviews",
          populate: {
            path: "user",
          },
        });
    },

    restaurant: async (parent, { _id }) => {
      return await Restaurant.findById(_id)
        .populate({
          path: "menu",
          populate: {
            path: "reviews",
            populate: {
              path: "user",
            },
          },
        })
        .populate({
          path: "reviews",
          populate: {
            path: "user",
          },
        });
    },

    checkout: async (parent, { cart }, context) => {
      const url = new URL(context.headers.referer).origin;
      const order = new Order({ cart });
      const line_items = [];
      const newOrder = await order.populate("cart.menuItem").execPopulate();
      for (let i = 0; i < newOrder.cart.length; i++) {
        const product = await stripe.products.create({
          name: newOrder.cart[i].menuItem.name,
          description: newOrder.cart[i].menuItem.description,
          images: [`${newOrder.cart[i].menuItem.image}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: newOrder.cart[i].menuItem.price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: newOrder.cart[i].quantity,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    addOrder: async (parent, { cart }, context) => {
      if (context.user && context.user._id) {
        const order = await Order.create({ cart });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { pastOrders: order._id },
        });

        return order.populate("cart.menuItem").execPopulate();
      }

      throw new AuthenticationError("Not logged in");
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    addReview: async (parent, { content, itemId }, context) => { 
      if (context.user) {
        const newReview = await Review.create({content: content, type: "MenuItem", user: context.user._id});
        await User.findByIdAndUpdate(context.user._id, { $push: { reviews: newReview._id } });
        await MenuItem.findByIdAndUpdate(itemId, { $push: { reviews: newReview._id } });
        return newReview;
      }
      throw new AuthenticationError("Not logged in");
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
