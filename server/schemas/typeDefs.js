const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    profileImg: String
    pastOrders: [Order]
    ownedRestaurants: [Restaurant]
  }

  type Order {
    _id: ID
    purchaseDate: String
    cart: [PurchasedItem]
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
    tags: String
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
    name: String
    content: String
    rating: Int
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    checkout(products: [ID]!): Checkout
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addReview(name: String!, content: String!, rating: Int!, type: String!, itemId: ID! ): Review
    updateUser(username: String, email: String, password: String): User
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
