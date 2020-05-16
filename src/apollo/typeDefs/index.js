import gql from 'graphql-tag';

export const typeDefs = gql`
    scalar Date

    type UsersResult {
        users: [User]
        currentPage: Int
        totalPages: Int
    }
    
    type User {
        _id: ID!
        username: String!
        password: String!
        token: String
        createdAt: Date!
    }

    type Event {
        _id: ID!
        title: String!
        eventCreator: String!
        description: String!
        createdAt: Date!
        scheduledAt: Date
    }

    type Query {
        isLoggedIn: Boolean!
        me: User
        myEvents: [Event]
        getUsers(searchTerm: String, page: Int, limit: Int): UsersResult
    }

    type Mutation {
        register(username: String!, password: String!): User
        login(username: String!, password: String!): User
        createEvent(title: String!, description: String!, scheduledAt: Date): Event!
        deleteEvent(_id: ID!): String
    }
`;
