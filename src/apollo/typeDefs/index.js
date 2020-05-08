import gql from "graphql-tag";

export const typeDefs = gql`
    scalar Date

    type User {
        username: String!
        password: String!
        token: String
        createdAt: Date!
    }

    type Event {
        title: String!
        eventCreator: String!
        description: String!
        createdAt: Date!
    }

    type Query {
        isLoggedIn: Boolean!
        me: User
        myEvents: [Event]
    }

    type Mutation {
        register(username: String!, password: String!): User
        login(username: String!, password: String!): User
        createEvent(title: String!, description: String!): Event
        writeMyEvents: [Event]
    }
`;
