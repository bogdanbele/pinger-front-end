import React from 'react';
import EventList from "../../feature-components/events/EventList";


const MyEventsView = () => {

	return (
		<div className="App">
			<header className="App-header">
				<EventList/>
			</header>
		</div>
	);
};

export default MyEventsView;
