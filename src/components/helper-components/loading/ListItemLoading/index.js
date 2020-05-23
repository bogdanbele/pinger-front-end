import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText/ListItemText';
import React from 'react';

export const ListItemLoading = () => {
	return <ListItem>
		<ListItemText
			primary='Loading ...'
		/>
	</ListItem>;
};