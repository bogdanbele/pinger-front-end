import React, {useState} from 'react';
import gql from 'graphql-tag';
import {useApolloClient, useQuery} from '@apollo/react-hooks';
import {UsersList} from '../../template-components/users/UserList';
import NotificationContainer from '../../helper-components/notifications/NotificationContainer';
import {UserRelationshipNotificationHandler} from '../../template-components/users/UserRelationshipNotificationHandler';

const FETCH_MY_RELATIONSHIPS = gql`
    query myRelationships($status: [Int]){
        myRelationships(status: $status){
            users{
                user{
                    username
                }
                status
            }
            totalPages
            count
            currentPage
        }
    }
`;

const MyProfile = () => {
	const client = useApolloClient();

	const {data} = useQuery(FETCH_MY_RELATIONSHIPS, {variables: {status : [0,1,2,3]}});
	console.log(data);
	const [currentlySelectedUser, setCurrentlySelectedUser] = useState(null);


	if (!data) {
		return null;
	}

	return (
		<div className="App">
			<NotificationContainer>
				<UserRelationshipNotificationHandler
					selectedUser={currentlySelectedUser}/>
			</NotificationContainer>
			{data
				&& <UsersList
					users={data.myRelationships.users}
					client={client}
					userOnClickCallback={setCurrentlySelectedUser}/>
			}
		</div>
	);
};

export default MyProfile;