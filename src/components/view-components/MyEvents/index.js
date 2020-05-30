import React from 'react';
import EventList from '../../feature-components/events/EventList';
import CreateEvent from '../../feature-components/events/SubmitEventForm';
import Row from '../../base-components/Row';

const MyEventsView = () => {
	return (
		<React.Fragment>
			<Row>
				<CreateEvent/>
			</Row>
			<EventList className="EventList"/>
		</React.Fragment>
	);
};

export default MyEventsView;
