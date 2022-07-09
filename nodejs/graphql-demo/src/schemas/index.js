import { gql } from 'apollo-server-express';

const schema = gql`
  type Query {
    getMe: User
    getUserById(id: ID!): User
    getUserByName(name: String!): User
  }

  type Mutation {
    createUser(
      name: String!
    ): User!
  }

  type User {
    id: ID!
    name: String!
  }
`;
export default schema;
