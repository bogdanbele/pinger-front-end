import { useMutation } from '@apollo/react-hooks';
import React, { useState } from 'react';
import gql from 'graphql-tag';
import ThemeInput from '../../base-components/ThemeInput';

const LOG_IN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
		}
	}
`;

export default () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [login, { loading, error, data }] = useMutation(LOG_IN, {
		variables: { username, password },
	});

	if (loading) {
		return null;
	}
	if (error) {
		console.log(error)
	}
	if (data) {
		console.log(data.login);
	}

	return (
		<div className="d-flex flex-column">
			<ThemeInput
				name="username"
				value={username}
				onChange={({target}) => setUsername(target.value)}
			/>
			<ThemeInput
				name="password"
				value={password}
				type="password"
				onChange={({target}) => setPassword(target.value)}
			/>

			<button type="button" onClick={() => login()}>
				click
			</button>
		</div>
	);
};
