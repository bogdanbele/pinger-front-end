import React from 'react';
import gql from 'graphql-tag';
import { useMutation, useQuery } from '@apollo/react-hooks';
import Card from '@material-ui/core/card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import EventPreview from '../../template-components/EventPreview'
import { Button } from '@material-ui/core';
import { formattedDate } from '../../../utils';

const FETCH_MY_EVENTS = gql`
  query myEvents {
    myEvents {
      _id
      __typename
      title
      description
      createdAt
    }
  }
`;

const DELETE_EVENT = gql`
  mutation deleteEvent($id: ID!) {
    deleteEvent(_id: $id)
  }
`;

const MyEventsView = () => {
	const { data } = useQuery(FETCH_MY_EVENTS);

	// A tuple is a finite ordered list (sequence) of elements
	// the useMutation functions returns a tuple that includes
	// ----- A mutate function(deleteEvent) that you can call at any time to execute the mutation
	// ----- An object with fields(not used in this case)
	// ------- that represent the current status of the mutation's execution
	const [deleteEvent] = useMutation(DELETE_EVENT, {
		refetchQueries: [{ query: FETCH_MY_EVENTS }],
		awaitRefetchQueries: true,
	});


	//TODO At one point let's implement some logic for loading
	if (!data) {
		return null;
	}

	const deleteOnClick = (id) => deleteEvent({
		variables: { id },
	}).catch(e => console.log(e))


	return (
		<div className="App">
			<header className="App-header">
				{data.myEvents.map((event, key) => {
					return (
						<EventPreview
							event={event}
							key={key}
							onClick={() => deleteOnClick(event._id)}
						/>
					);
				})}
			</header>
		</div >
	)
};

export default MyEventsView;
