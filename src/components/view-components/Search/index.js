import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../base-components/ThemeInput/ThemeInput';
import Button from '../../base-components/Button/Button';
import Card from '@material-ui/core/Card/Card';
import gql from 'graphql-tag';
import {useApolloClient, useLazyQuery} from '@apollo/react-hooks';
import {useDebouncedCallback} from 'use-debounce';
import NotificationContainer from '../../helper-components/notifications/NotificationContainer';
import Typography from '@material-ui/core/Typography';
import {ListItemLoading} from '../../helper-components/loading/ListItemLoading';
import {UsersList} from '../../template-components/users/UserList';
import {UserRelationshipNotificationHandler} from "../../template-components/users/UserRelationshipNotificationHandler";


const SEARCH_USERS = gql`
    query getUsersWithStatus($searchTerm: String!, $page: Int, $limit: Int){
        getUsersWithStatus(searchTerm: $searchTerm, page: $page, limit: $limit){
            users{
                user {
	                _id
                    username
                }
                status
            }
            totalPages
            currentPage
        }
    }
`;


const SearchView = () => {

	const client = useApolloClient();

	const [currentUser, setCurrentUser] = useState(null);

	const [getUsers, {data, loading}] = useLazyQuery(SEARCH_USERS);

	console.log(data)

	const [debouncedCallback] = useDebouncedCallback(
		// function
		value => getUsers({
			variables: {searchTerm: value},
		}),
		// delay in ms
		500
	);

	console.log(currentUser);

	return (
		<div className="App">
			<header className="App-header">
				<h1 className="my-5">Search</h1>
				<NotificationContainer>
					<UserRelationshipNotificationHandler
						currentUser={currentUser}/>
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
						{loading && <ListItemLoading/>}
						{data
						&& <UsersList
							users={data.getUsersWithStatus.users}
							client={client}
							userOnClickCallback={setCurrentUser}/>
						}
					</div>
				</Card>
			</header>
		</div>
	);
};

export default SearchView;
