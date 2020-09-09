import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import {USER_STATUS_TYPE} from '../utils';

const iconSwitch = status => {
	switch (status) {
		case USER_STATUS_TYPE.NULL:
			return <PersonAddIcon/>;
		case USER_STATUS_TYPE.PENDING :
			return <HourglassEmptyIcon/>; // pending / awaiting response
		case USER_STATUS_TYPE.AWAITING :
			return <EmailIcon/>; // needs to respond to invite
		case USER_STATUS_TYPE.FRIENDS :
			return <PeopleIcon/>;   // friends / accepted
		case USER_STATUS_TYPE.BLOCKED :
			return <PersonAddDisabledIcon/>; // blocked
		default:
			return <PersonAddIcon/>;
	}
};

const secondaryTestSwitch = status => {
	switch (status) {
		case USER_STATUS_TYPE.NULL:
			return 'no relationship';
		case USER_STATUS_TYPE.PENDING :
			return 'pending'; // pending / awaiting response
		case USER_STATUS_TYPE.AWAITING :
			return 'waiting for response'; // needs to respond to invite
		case USER_STATUS_TYPE.FRIENDS :
			return 'friends';   // friends / accepted
		case USER_STATUS_TYPE.BLOCKED :
			return 'blocked'; // blocked
		case 4:
			return 'UNSUPPORTED CASE';
		default:
			return 'no relationship';
	}
};

export const UserStatusMapper = ({status, user}) => {
	return (
		<React.Fragment>
			<ListItemIcon>
				{iconSwitch(status)}
			</ListItemIcon>
			<ListItemText
				primary={user.username}
				secondary={secondaryTestSwitch(status)}
			/>
		</React.Fragment>
	);
};