import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const ShowOnAuth = ({children}) => {
	const {data: {isLoggedIn}} = useQuery(IS_LOGGED_IN);
	return isLoggedIn && children
};

export const HideOnAuth = ({children}) => {
	const {data: {isLoggedIn}} = useQuery(IS_LOGGED_IN);
	return !isLoggedIn && children
};