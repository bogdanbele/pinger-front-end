import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../base-components/ThemeInput/ThemeInput';
import Button from '../../base-components/Button/Button';
import Card from '@material-ui/core/Card/Card';
import gql from 'graphql-tag';
import {useApolloClient, useLazyQuery} from '@apollo/react-hooks';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {useDebouncedCallback} from 'use-debounce';
import NotificationContainer from '../../feature-components/notifications';
import Typography from '@material-ui/core/Typography';


const SEARCH_USERS = gql`
    query getUsersWithStatus($searchTerm: String!, $page: Int, $limit: Int){
        getUsersWithStatus(searchTerm: $searchTerm, page: $page, limit: $limit){
            users{
                user {
	                username
                }
	            status
            }
            totalPages
            currentPage
        }
    }
`;

const UsersList = (users, client) => {

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
		<ListItem button
		          key={index}
		          className='flex-row'
		          onClick={() =>
			          client.writeData({data: {isNotificationModalOpen: true}})
		          }>
			<ListItemText
				primary={elem.user.username}

			/>
			<span>{elem.status}</span>
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

	const client = useApolloClient();

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
				<NotificationContainer>
					<CardHeader
						title='Add this guy to your friends?'/>
					<Typography
						variant="body2"
						color="textSecondary"
						component="p">
						He might be a great guy!
					</Typography>
					<Button onClick={() => console.log('click')}>
						Click
					</Button>
				</NotificationContainer>

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
						{data && UsersList(data.getUsersWithStatus.users, client)}
					</div>
				</Card>
			</header>
		</div>
	);
};

export default SearchView;
