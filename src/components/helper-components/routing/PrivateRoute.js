import React from 'react';
import {Redirect, Route} from 'react-router-dom';

import {useQuery} from '@apollo/react-hooks';
import {IS_LOGGED_IN} from 'apollo/queries';

export const PrivateRoute = ({component: Component, ...rest}) => {
	const {
		data: {isLoggedIn},
	} = useQuery(IS_LOGGED_IN);

	return (
		<Route
			{...rest}
			render={props =>
				isLoggedIn ? <Component {...props} /> : <Redirect to="/sign-in" />
			}
		/>
	);
};
