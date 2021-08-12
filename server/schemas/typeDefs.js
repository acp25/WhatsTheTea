const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    profileImg: String
    pastOrders: [Order]
  }

  type Order {
    _id: ID
  }

  type PurchasedItem {
    _id: ID
  }

  type Restaurant {
    _id: ID
  }

  type MenuItem {
    _id: ID
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
