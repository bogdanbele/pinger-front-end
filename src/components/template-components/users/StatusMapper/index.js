import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Person from '@material-ui/icons/Person';
import PeopleIcon from '@material-ui/icons/People';
import EmailIcon from '@material-ui/icons/Email';
import PersonAddDisabledIcon from '@material-ui/icons/PersonAddDisabled';
import HourglassEmptyIcon from '@material-ui/icons/HourglassEmpty';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';

const iconSwitch = status => {
	switch (status) {
		case 0 :
			return <HourglassEmptyIcon/>; // pending / awaiting response
		case 1 :
			return <EmailIcon/>; // needs to respond to invite
		case 2 :
			return <PeopleIcon/>;   // friends / accepted
		case 3 :
			return <PersonAddDisabledIcon/>; // declined
		case 4 :
			return <PersonAddDisabledIcon/>; // blocked
		default:
			return <PersonAddIcon/>;
	}
};

export const StatusMapper = ({status, user}) => {

	return (
		<React.Fragment>
			<ListItemIcon>
				{iconSwitch(status)}
			</ListItemIcon>
			<ListItemText
				primary={user.username}
				secondary={'pending'}
			/>
		</React.Fragment>
	);
};