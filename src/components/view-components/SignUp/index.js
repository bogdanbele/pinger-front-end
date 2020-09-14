import React from 'react';
import SignUpForm from '../../feature-components/authentication/SignUpForm';
import {IsLoggedInComponent} from '../../feature-components/authentication/helpers';

const SignUpView = () => {
	return (
		<IsLoggedInComponent>
			<SignUpForm />
		</IsLoggedInComponent>
	);
};

export default SignUpView;
