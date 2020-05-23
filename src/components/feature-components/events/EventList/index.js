import EventPreview from '../../../template-components/events/EventPreview';
import React from 'react';
import {useMutation, useQuery} from '@apollo/react-hooks';
import gql from 'graphql-tag';

// Queries and Mutations
const DELETE_EVENT = gql`
    mutation deleteEvent($id: ID!) {
        deleteEvent(_id: $id)
    }
`;

const FETCH_MY_EVENTS = gql`
    query myEvents {
        myEvents {
            _id
            __typename
            title
            description
            createdAt
	        scheduledAt
        }
    }
`;

const EventList = props => {
	const {data} = useQuery(FETCH_MY_EVENTS);

	const [deleteEvent] = useMutation(DELETE_EVENT, {
		refetchQueries: [{query: FETCH_MY_EVENTS}],
		awaitRefetchQueries: true,
	});

	//TODO At one point let's implement some logic for loading
	if (!data) {
		return null;
	}

	const deleteOnClick = id => deleteEvent({
		variables: {id},
	}).catch(e => console.log(e));

	return (
		<div {...props}>
			{data.myEvents.map((event, key) =>
				<EventPreview
					event={event}
					key={key}
					onClick={() => deleteOnClick(event._id)}
				/>)}
		</div>
	);
};

export default EventList;