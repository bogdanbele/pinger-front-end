import {useApolloClient, useMutation} from '@apollo/react-hooks';
import React, {useState} from 'react';
import Button from '../../base-components/Button';
import ThemeInput from '../../base-components/ThemeInput';
import Card from "@material-ui/core/Card";
import styles from './SignIn.module.scss'
import CardHeader from "@material-ui/core/CardHeader";
import {Redirect} from "react-router-dom";
import {LOG_IN} from "../../../apollo/mutations";

/*const useLogin = (client, username, password) => {
	const [login, {error, loading, data}] = useMutation(LOG_IN, {
		variables: {username, password},
	});
	console.log(error)

	if (loading) return null;
	if (data) {
		console.log(data.login);

		client.writeData({data: {isLoggedIn: true}});
		localStorage.setItem('token', data.login.token);
		setTimeout(() => {
			return <Redirect to='/'/>
		}, 250)
	}

	return login
};*/

export default () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const client = useApolloClient();

	const [login, {data}] = useMutation(LOG_IN, {
		variables: {username, password},
	});
	if (data) {
		console.log(data.login);

		client.writeData({data: {isLoggedIn: true}});
		localStorage.setItem('token', data.login.token);
		setTimeout(() => {
			return <Redirect to='/'/>
		}, 250)
	}

	return (
		<Card className={styles.Card}>
			<CardHeader title="Notification based events"
			            subheader="Sign In"/>
			<ThemeInput
				label="Username"
				name="username"
				autoComplete='new-password'
				value={username}
				onChange={({target}) => setUsername(target.value)}
			/>
			<ThemeInput
				label="Password"
				name="password"
				autoComplete='new-password'
				value={password}
				type="password"
				onChange={({target}) => setPassword(target.value)}
			/>

			<Button type="button" onClick={login}>
				click
			</Button>
		</Card>
	);
};
