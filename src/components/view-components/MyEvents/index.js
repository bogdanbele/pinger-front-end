import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";
import Card from "@material-ui/core/card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";

const FETCH_MY_EVENTS_REMOTE = gql`
    query myEvents {
        myEvents{
            title
            description
            createdAt
        }
    }
`;

const formattedDate = (date) => {
	let formattedDate = new Date(date);
	return formattedDate.toLocaleString()
};


export default () => {

	const {data} = useQuery(FETCH_MY_EVENTS_REMOTE);
	console.log(data);
	if (!data) {
		return null;
	} else {

		return (
			<div className="App">
				<header className="App-header">
					{data.myEvents.map((event, key) => {
						console.log(event)

						return (
							<Card key={key} className='m-4'>
								<CardHeader
									title={event.title}
									subheader={formattedDate(event.createdAt)}/>
								<CardContent>
									<Typography variant="body2" color="textSecondary" component="p">
										{event.description}
									</Typography>
								</CardContent>
							</Card>
						)
					})}
				</header>
			</div>
		)
	}
}
;