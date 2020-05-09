import React from 'react';
import gql from 'graphql-tag';
import {useApolloClient, useLazyQuery, useMutation, useQuery} from "@apollo/react-hooks";
import Card from "@material-ui/core/card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardHeader from "@material-ui/core/CardHeader";
import {Button} from "@material-ui/core";

const FETCH_MY_EVENTS = gql`
    query myEvents {
        myEvents{
            _id
            __typename
            title
            description
            createdAt
        }
    }
`;

const DELETE_EVENT = gql`
    mutation deleteEvent($id: ID!){
        deleteEvent(_id: $id)
    }
`;

const formattedDate = (date) => {
	let formattedDate = new Date(date);
	return formattedDate.toLocaleString()
};

export default () => {
	const {data} = useQuery(FETCH_MY_EVENTS);

	// A tuple is a finite ordered list (sequence) of elements
	// the useMutation functions returns a tuple that includes
	// ----- A mutate function(deleteEvent) that you can call at any time to execute the mutation
	// ----- An object with fields(not used in this case) that represent the current status of the mutation's execution
	const [deleteEvent] = useMutation(DELETE_EVENT, {
		refetchQueries: [{ query: FETCH_MY_EVENTS}],
		awaitRefetchQueries: true
	});

	//TODO At one point let's implement some logic for loading
	if (!data) {
		return null;
	}

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
								<Button onClick={() => deleteEvent({
									variables: {
										id: event._id
									}
								})
									.catch(e => console.log(e))
								}>
									Click
								</Button>
							</CardContent>
						</Card>
					)
				})}
			</header>
		</div>
	)
}

;