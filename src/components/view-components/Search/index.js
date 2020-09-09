import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../base-components/ThemeInput/ThemeInput';
import Card from '@material-ui/core/Card/Card';
import gql from 'graphql-tag';
import {useApolloClient, useLazyQuery} from '@apollo/react-hooks';
import {useDebouncedCallback} from 'use-debounce';
import NotificationContainer from '../../helper-components/notifications/NotificationContainer';
import {ListItemLoading} from '../../helper-components/loading/ListItemLoading';
import {UsersList} from '../../template-components/users/UserList';
import {UserRelationshipNotificationHandler} from '../../template-components/users/UserRelationshipNotificationHandler';


export const SEARCH_USERS = gql`
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

	const [currentlySelectedUser, setCurrentlySelectedUser] = useState(null);
	const [searchTermInState, setSearchTermInState] = useState(null);

	const [getUsers, {data, loading}] = useLazyQuery(SEARCH_USERS);

	console.log(data);

	const [debouncedCallback] = useDebouncedCallback(
		// function
		value => {
			return getUsers({
				variables: {searchTerm: value},
			});
		},
		// delay in ms
		500
	);

	console.log(searchTermInState)

	return (
		<React.Fragment>
			<h1 className="my-5">Search</h1>
			<NotificationContainer>
				<UserRelationshipNotificationHandler
					selectedUser={currentlySelectedUser}
					queriedBySearchTerm={searchTermInState}
				/>
			</NotificationContainer>

			<Card className='d-flex flex-column p-4 w-25 align-self-center'>
				<CardHeader title='Search for a user'/>
				<ThemeInput
					label='Username'
					name='searchTerm'
					autoComplete='new-password'
					onChange={({target}) => {
						setSearchTermInState(target.value);
						return debouncedCallback(target.value);
					}}
				/>
				<div>
					{loading && <ListItemLoading/>}
					{data
					&& <UsersList
						users={data.getUsersWithStatus.users}
						client={client}
						userOnClickCallback={setCurrentlySelectedUser}/>
					}
				</div>
			</Card>
		</React.Fragment>
	);
};

export default SearchView;
