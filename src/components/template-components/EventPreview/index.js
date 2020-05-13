import React from 'react';
import Card from '@material-ui/core/card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import {formattedDate} from '../../../utils';
import {Button} from '@material-ui/core';

const EventPreview = ({event, onClick}) => {
	console.log(event);
	return (
		<Card className="m-5 p-3">
			<CardHeader
				title={event.title}
				subheader={formattedDate(event.scheduledAt)}/>
			<CardContent>
				<Typography
					variant="body2"
					color="textSecondary"
					component="p">
					{event.description}
				</Typography>
				<Button onClick={onClick}>
					Click
				</Button>

			</CardContent>
		</Card>
	);
};

export default EventPreview;