import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../base-components/ThemeInput/ThemeInput';
import Button from '../../base-components/Button/Button';
import Card from '@material-ui/core/Card/Card';
import gql from 'graphql-tag';
import {useLazyQuery} from '@apollo/react-hooks';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {useDebouncedCallback} from 'use-debounce';


const SEARCH_USERS = gql`
    query getUsers($searchTerm: String!){
        getUsers(searchTerm: $searchTerm){
            username
        }
    }
`;

const UsersList = users => {
	console.log(users);
	console.log(users.length === 0);

	if (users.length === 0) {
		return <ListItem>
			<ListItemText
				primary='No results'
			/>
		</ListItem>;
	}

	const userList = users.map((elem, index) =>
		<ListItem button key={index}>
			<ListItemText
				primary={elem.username}
			/>
		</ListItem>,
	);
	return <List>{userList}</List>;
};

const Loading = () => {
	return <ListItem>
		<ListItemText
			primary='Loading ...'
		/>
	</ListItem>;
};


const SearchView = () => {

	const [getUsers, {data, loading}] = useLazyQuery(SEARCH_USERS);
	if (data) {
		console.log(data);
	}

	const [debouncedCallback] = useDebouncedCallback(
		// function
		value => getUsers({
			variables: {searchTerm : value},
		}),
		// delay in ms
		500
	);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="my-5">Search</h1>


				<Card className='d-flex flex-column p-4'>
					<CardHeader title='Search for something' subheader='No drama'/>
					<ThemeInput
						label='Event Description'
						name='searchTerm'
						autoComplete='new-password'
						onChange={({target}) => debouncedCallback(target.value)}
					/>
					<div>
						{loading && <Loading/>}
						{data && UsersList(data.getUsers)}
					</div>
					<Button
						type='button'
						className='align-self-center'
						onClick={debouncedCallback}
					>
						Search
					</Button>
				</Card>
			</header>
		</div>
	);
};

export default SearchView;
