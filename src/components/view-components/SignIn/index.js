import React from 'react';
import SignIn from "../../features/SignIn";
import {useQuery} from "@apollo/react-hooks";
import gql from 'graphql-tag';

const IS_LOGGED_IN = gql`
    query IsUserLoggedIn {
        isLoggedIn @client
    }
`;

function IsLoggedIn() {
	const { loading, error, data } = useQuery(IS_LOGGED_IN);
	if( loading || !data ) return <p>'Loading'</p>;
	if( error ) return error;
	return data.isLoggedIn ? <p>Esti un bepis</p> : <SignIn />;
}


function SignInView() {

	return (
		<div className="App">
			<header className="App-header">
				<IsLoggedIn />
			</header>
		</div>
	);
}

export default SignInView;
