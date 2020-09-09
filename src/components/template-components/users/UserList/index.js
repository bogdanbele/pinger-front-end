import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import List from '@material-ui/core/List';
import {UserStatusMapper} from '../UserStatusMapper';

export const UsersList = ({users, client, userOnClickCallback}) => {

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
		          onClick={() => {
			          client.writeData({
				          data: {isNotificationModalOpen: true},
			          });
			          userOnClickCallback(elem);
		          }}>
			<UserStatusMapper
				status={elem.status}
				user={elem.user}/>
		</ListItem>,
	);
	return <List>{userList}</List>;
};