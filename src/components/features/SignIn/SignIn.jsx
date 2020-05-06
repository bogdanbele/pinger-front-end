import {useApolloClient, useMutation} from '@apollo/react-hooks';
import React, { useState } from 'react';
import gql from 'graphql-tag';
import Button from '../../base-components/Button';
import ThemeInput from '../../base-components/ThemeInput';

const LOG_IN = gql`
	mutation login($username: String!, $password: String!) {
		login(username: $username, password: $password) {
			token
		}
	}
`;


export default () => {

	const client = useApolloClient();

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
		client.resetStore().then(
			()  => {
				client.writeData({ data: { isLoggedIn: true } });
			}
		);

		localStorage.setItem('token',data.login.token);
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

			<Button type="button" onClick={() => login()}>
				click
			</Button>
		</div>
	);
};
