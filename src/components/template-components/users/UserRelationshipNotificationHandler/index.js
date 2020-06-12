import React from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '../../../base-components/Button/Button';
import {USER_STATUS_TYPE} from '../utils';
import gql from 'graphql-tag';

const CREATE_USER_RELATIONSHIP = gql`
	mutation createUserRelationship($id: ID!){
		createUserRelationship(_id: $id)
	}
`;

// Switch

const TemplateSwitch = ({user,status}) => {

	switch (status) {
		case USER_STATUS_TYPE.NULL :
			return <RequestFriendNotification user={user} />;
		case USER_STATUS_TYPE.PENDING:
			return <p>case 0</p>;
		case USER_STATUS_TYPE.AWAITING:
			return <p>case 1</p>;
		default: return <p>case 0</p>;
	}
};

// Templates
const RequestFriendNotification = ({user}) => {
	if (!user) {
		return null;
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
			<Button onClick={() => console.log('click')}>
				Add
			</Button>
		</React.Fragment>
	);
};

export const UserRelationshipNotificationHandler = ({selectedUser}) => {
	return TemplateSwitch(selectedUser);
};