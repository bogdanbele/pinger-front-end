import { useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const ShowOnAuth = ({children}) => {
	const {data} = useQuery(IS_LOGGED_IN);
	return data.isLoggedIn ? children : null
};

export const HideOnAuth = ({children}) => {
	const {data} = useQuery(IS_LOGGED_IN);
	return !data.isLoggedIn ? children : null
};