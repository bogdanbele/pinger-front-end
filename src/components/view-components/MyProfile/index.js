import React, {useEffect, useState} from 'react';
import gql from 'graphql-tag';
import {useApolloClient, useLazyQuery} from '@apollo/react-hooks';
import {UsersList} from '../../template-components/users/UserList';
import NotificationContainer from '../../helper-components/notifications/NotificationContainer';
import {UserRelationshipNotificationHandler} from '../../template-components/users/UserRelationshipNotificationHandler';
import {Button} from '@material-ui/core';
import Flex from '../../base-components/Flex';
import Row from 'components/base-components/Row';

export const FETCH_MY_RELATIONSHIPS = gql`
	query myRelationships($status: [Int]) {
		myRelationships(status: $status) {
			users {
				user {
					_id
					username
					relationships {
						status
						updatedAt
					}
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
	const [status, setStatus] = useState([0, 1, 2, 3, 4]);

	const [fetchMyRelationships, {data}] = useLazyQuery(FETCH_MY_RELATIONSHIPS, {
		fetchPolicy: 'cache-and-network',
	});
	console.log(data);
	const [currentlySelectedUser, setCurrentlySelectedUser] = useState(null);

	useEffect(() => {
		fetchMyRelationships({variables: {status}});
	}, [status, fetchMyRelationships]);

	console.log('status = ' + status);
	return (
		<div className="App">
			<NotificationContainer>
				<UserRelationshipNotificationHandler
					selectedUser={currentlySelectedUser}
					queriedByStatus={status}
				/>
			</NotificationContainer>
			<Row>
				<Flex className="flex-column">
					<Button onClick={() => setStatus(0)}>Awaiting Response From</Button>
					<Button onClick={() => setStatus(1)}>Awaiting Response</Button>
					<Button onClick={() => setStatus(2)}>My friends</Button>
				</Flex>
			</Row>
			{data 
				&& <UsersList
					users={data.myRelationships.users}
					client={client}
					userOnClickCallback={setCurrentlySelectedUser}
				/>
			}
		</div>
	);
};

export default MyProfile;
