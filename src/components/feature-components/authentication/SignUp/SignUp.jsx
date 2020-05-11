import gql from 'graphql-tag';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import React, {useState} from 'react';
import Button from '../../../base-components/Button';
import ThemeInput from '../../../base-components/ThemeInput';
import Card from '@material-ui/core/Card';
import styles from '.././authentication.module.scss';
import CardHeader from '@material-ui/core/CardHeader';
import {Redirect} from 'react-router-dom';

const REGISTER = gql`
  mutation register($username: String!, $password: String!) {
    register(username: $username, password: $password) {
      token
    }
  }
`;

export default () => {
	const client = useApolloClient();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [register, {data}] = useMutation(REGISTER);

	if (data) {
		client.writeData({data: {isLoggedIn: true}});
		localStorage.setItem('token', data.register.token);
		setTimeout(() => {
			return <Redirect to='/' />;
		}, 250);
	}

	return (
		<Card className={styles.Card}>
			<CardHeader title='Notification based events' subheader='Sign Up' />
			<ThemeInput
				label='Username'
				name='username'
				autoComplete='new-password'
				value={username}
				onChange={({target}) => setUsername(target.value)}
			/>
			<ThemeInput
				label='Password'
				name='password'
				autoComplete='new-password'
				value={password}
				type='password'
				onChange={({target}) => setPassword(target.value)}
			/>

			<Button
				type='button'
				onClick={() =>
					register({
						variables: {username, password},
					})
				}
			>
        Log in
			</Button>
		</Card>
	);
};
