import React from 'react';
import EventList from '../../feature-components/events/EventList';
import CreateEvent from '../../feature-components/events/SubmitEventForm';
import Row from '../../base-components/Row';

const MyEventsView = () => {
	return (
		<div className="App">
			<header className="App-header">
				<React.Fragment>
					<Row>
						<CreateEvent/>
					</Row>
					<EventList/>
				</React.Fragment>
			</header>
		</div>
	);
};

export default MyEventsView;
