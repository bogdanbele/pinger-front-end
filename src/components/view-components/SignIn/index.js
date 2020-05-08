import React from 'react';
import SignIn from "../../feature-components/SignIn";
import {useQuery} from "@apollo/react-hooks";
import {IS_LOGGED_IN} from "../../../apollo/queries";

function IsLoggedIn() {
	const { loading, error, data } = useQuery(IS_LOGGED_IN);
	if( loading || !data ) return <p>'Loading'</p>;
	if( error ) return error;
	return data.isLoggedIn ? <p>Esti un bepis</p> : <SignIn />;
}


const SignInView= () => {
	return (
		<div className="App">
			<header className="App-header">
				<IsLoggedIn />
			</header>
		</div>
	);
}

export default SignInView;
