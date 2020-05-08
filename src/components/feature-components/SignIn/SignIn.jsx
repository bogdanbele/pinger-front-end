import {useApolloClient, useMutation} from '@apollo/react-hooks';
import React, {useState} from 'react';
import Button from '../../base-components/Button';
import ThemeInput from '../../base-components/ThemeInput';
import Card from "@material-ui/core/Card";
import styles from './SignIn.module.scss'
import CardHeader from "@material-ui/core/CardHeader";
import {Redirect} from "react-router-dom";
import {LOG_IN} from "../../../apollo/mutations";

export default () => {
	const client = useApolloClient();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const [login, {data}] = useMutation(LOG_IN);
	if (data) {
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

			<Button type="button" onClick={() => login({
				variables: {username, password},
			})}>
				click
			</Button>
		</Card>
	);
};
