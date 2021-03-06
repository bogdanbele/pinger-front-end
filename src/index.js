import React from 'react';
import ReactDOM from 'react-dom';

// App main
import App from './components/App';

// Apollo
import {ApolloProvider} from '@apollo/react-hooks';
import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {setContext} from 'apollo-link-context';
import {onError} from 'apollo-link-error';
import {createHttpLink} from 'apollo-link-http';

// Local Apollo Set-up
import {resolvers} from './apollo/resolvers/index';

const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
});

const cache = new InMemoryCache();

// Initializing the data inside cache
cache.writeData({
	data: {
		isLoggedIn: !!localStorage.getItem('token'),
		isNotificationModalOpen: false,
		willReload: false,
	},
});

// Add the authorization token to the request's header
const authLink = setContext((_, {headers}) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : '',
		},
	};
});

// Global error handling
const httpLinkWithErrorHandling = onError(({graphQLErrors, networkError}) => {
	if (graphQLErrors) {
		graphQLErrors.forEach(({message, locations, path}) => {
			if (message === 'Please Login Again!') {
				if (Boolean(localStorage.getItem('token'))) {
					localStorage.removeItem('token');
					cache.writeData({data: {willReload: true}});
				}
			}
			console.log(
				`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
			);
		});
	}
	if (networkError) {
		console.log(`[Network error]: ${networkError}`);
	}
});

// Initializing the ApolloClient
const client = new ApolloClient({
	cache,
	name: 'web-frontend',
	link: ApolloLink.from([httpLinkWithErrorHandling, authLink.concat(httpLink)]),
	resolvers,
});

// Wraps the App with ApolloProvider
// Render the App inside the -root- element
ReactDOM.render(
	<ApolloProvider client={client}>
		<App />
	</ApolloProvider>,
	document.getElementById('root')
);
