import React from "react";
import {useQuery} from "@apollo/react-hooks";
import {IS_LOGGED_IN} from "../../../../apollo/queries";

export const IsLoggedInComponent = ({children}) => {
	const { loading, error, data } = useQuery(IS_LOGGED_IN);
	if (loading || !data) return <p>'Loading'</p>;
	if (error) return error;
	return data.isLoggedIn ? (
		<p>You are part of the gang. Grab a hat you dufus</p>
	) : (
		children
	);
};
