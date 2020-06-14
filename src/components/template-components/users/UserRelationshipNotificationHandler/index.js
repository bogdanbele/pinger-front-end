import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '../../../base-components/Button/Button';
import {USER_STATUS_TYPE} from '../utils';
import gql from 'graphql-tag';
import {useApolloClient, useMutation} from '@apollo/react-hooks';
import {SEARCH_USERS} from '../../../view-components/Search';

const CREATE_USER_RELATIONSHIP = gql`
    mutation createUserRelationship($id: ID!){
        createUserRelationship(_id: $id)
    }
`;

// Switch

const TemplateSwitch
	= ({user, status}, queriedByStatus, queriedBySearchTerm) => {
		console.log(queriedByStatus);
		console.log(queriedBySearchTerm);
		switch (status) {
			case USER_STATUS_TYPE.NULL :
				return <RequestFriendNotification
					user={user}
					searchTerm={queriedBySearchTerm}/>;
			case USER_STATUS_TYPE.PENDING:
				return <p>case 0</p>;
			case USER_STATUS_TYPE.AWAITING:
				return <p>case 1</p>;
			default:
				return <p>case 0</p>;
		}
	};

// Templates
const RequestFriendNotification = ({user, searchTerm}) => {
	const client = useApolloClient();

	console.log(searchTerm);
	const [createUserRelationship, {data}]
		= useMutation(CREATE_USER_RELATIONSHIP, {
			refetchQueries: [{query: SEARCH_USERS, variables: {searchTerm}}],
			awaitRefetchQueries: true,
		});

	if (!user) {
		return null;
	}

	if (data) {
		client.writeData({
			data: {
				isNotificationModalOpen: false,
			},
		});
	}
	return (
		<React.Fragment>
			<CardHeader
				title={user.username}/>
			<Typography
				variant="body2"
				color="textSecondary"
				component="p">
				{`Add ${user.username} to your friends list?`}
			</Typography>
			<Button onClick={() => createUserRelationship(
				{variables: {id: user._id}})}>
				Add
			</Button>
		</React.Fragment>
	);
};

export const UserRelationshipNotificationHandler
	= ({selectedUser, queriedByStatus, queriedBySearchTerm}) => {
		return TemplateSwitch(selectedUser, queriedByStatus, queriedBySearchTerm);
	};