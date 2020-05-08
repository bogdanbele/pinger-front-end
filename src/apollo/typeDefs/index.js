import gql from "graphql-tag";

export const typeDefs = gql`
    scalar Date
    
    type User {
        username: String!
        password: String!
        token: String
        createdAt: Date!
    }

    type Query {
        isLoggedIn: Boolean!
    }
    
    type Mutation {
        login(username: String!, password: String!): User
    },
`;
