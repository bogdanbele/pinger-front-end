import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import Button from '../../../base-components/Button/Button';
import NotificationContainer from '../../../helper-components/notifications/NotificationContainer';
import {USER_STATUS_TYPE} from '../utils';

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
	return (
		<React.Fragment>
			<CardHeader
				title='Add this guy to your friends?'/>
			<Typography
				variant="body2"
				color="textSecondary"
				component="p">
				{user && user.username}
			</Typography>
			<Button onClick={() => console.log('click')}>
				Click
			</Button>
		</React.Fragment>
	);
};

export const UserRelationshipNotificationHandler = ({currentUser}) => {
	return TemplateSwitch(currentUser);
};