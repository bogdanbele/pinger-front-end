import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient} from 'apollo-client';
import {ApolloLink} from 'apollo-link';
import {withClientState} from 'apollo-link-state';
import {createHttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {resolvers} from './apollo/resolvers/index'
import {typeDefs} from "./apollo/typeDefs";
import {defaults} from './apollo/defaults'
// 2
const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
});

const cache = new InMemoryCache();

const stateLink = withClientState({resolvers, cache, defaults});

// client
const client = new ApolloClient({
	cache,
	link: ApolloLink.from([stateLink, httpLink]),
	request: (operation) => {
		const token = localStorage.getItem('token');
		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : ''
			}
		})
	},
	resolvers,
	typeDefs
});

cache.writeData({
	data: {
		isLoggedIn: !!localStorage.getItem('token'),
	},
});


ReactDOM.render(
	<ApolloProvider client={client}>
		<App/>
	</ApolloProvider>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
