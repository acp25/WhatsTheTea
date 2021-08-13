const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    profileImg: String
    address: [String]
    pastOrders: [Order]
    ownedRestaurants: [Restaurant]
    reviews: [Review]
  }

  type Order {
    _id: ID
    purchaseDate: String
    cart: [PurchasedItem]
  }

  input PurchasedItemData {
    quantity: Int
    addon: String
    menuItem: ID
  }

  type PurchasedItem {
    _id: ID
    quantity: Int
    addon: String
    menuItem: MenuItem
  }

  type Restaurant {
    _id: ID
    name: String
    logo: String
    location: String
    tags: [String]
    rating: Int
    menu: [MenuItem]
    reviews: [Review]
  }

  type MenuItem {
    _id: ID
    name: String
    image: String
    description: String
    price: Float
    reviews: [Review]
  }

  type Review {
    _id: ID
    user: User
    type: String
    content: String
    rating: Int
  }

  type Auth {
    token: ID
    user: User
  }

  type Checkout {
    session: ID
  }

  type Query {
    user: User
    allRestaurants: [Restaurant]
    allMenuItems: [MenuItem]
    restaurants(searchTerm: String, tag: String): [Restaurant]
    restaurant(_id: ID!): Restaurant
    checkout(cart: [PurchasedItemData]!): Order
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(cart: [PurchasedItemData]!): Order
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
