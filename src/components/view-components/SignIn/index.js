import React from 'react';
import SignInForm from '../../feature-components/authentication/SignInForm';
import {IsLoggedInComponent} from '../../feature-components/authentication/helpers';

const SignInView = () => {
	return (
		<IsLoggedInComponent>
			<SignInForm/>
		</IsLoggedInComponent>
	);
};

export default SignInView;
