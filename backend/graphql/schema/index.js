const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Expense {
    id: ID!
    category: String!
    type: String!
    amount: Float!
    date: String!
  }

  type Query {
    expenses: [Expense!]!
  }

  type Mutation {
    addExpense(category: String!, type: String!, amount: Float!, date: String!): Expense!
  }
`;

module.exports = typeDefs;

