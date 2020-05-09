import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {ApolloClient} from 'apollo-client';
import {createHttpLink} from 'apollo-link-http';
import {ApolloProvider} from '@apollo/react-hooks';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {setContext} from 'apollo-link-context';
import {resolvers} from './apollo/resolvers/index'
import {typeDefs} from "./apollo/typeDefs";
import {ApolloLink} from 'apollo-link';
import {httpLinkWithErrorHandling} from "./components/feature-components/routing";

const httpLink = createHttpLink({
	uri: 'http://localhost:4000',
});

const cache = new InMemoryCache();

const defaultData = {
	isLoggedIn: !!localStorage.getItem('token'),
};

// Initializing the data inside cache
cache.writeData({
	data: defaultData
});


// Add the authorization token to the request's header
const authLink = setContext((_, {headers}) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem('token');
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `${token}` : "",
		}
	}
});

// Initializing the ApolloClient
const client = new ApolloClient({
	cache,
	link: ApolloLink.from([httpLinkWithErrorHandling, authLink.concat(httpLink)]),
	resolvers,
	typeDefs
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
