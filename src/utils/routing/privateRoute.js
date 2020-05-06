import {Redirect, Route} from "react-router-dom";
import React from "react";
import { useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

export const PrivateRoute = ({component: Component, ...rest}) => {
	const {data} = useQuery(IS_LOGGED_IN);

	return (
		<Route {...rest} render={(props) => (
			data.isLoggedIn
				? <Component {...props} />
				: <Redirect to='/login'/>
		)}/>)
}