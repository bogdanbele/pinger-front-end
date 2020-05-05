import gql from "graphql-tag";

export const typeDefs = gql`
	type Query {
        isLoggedIn: Boolean!
    }
`;

export const resolvers = {};