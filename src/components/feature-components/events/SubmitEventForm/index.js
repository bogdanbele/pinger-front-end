import React, {useState} from 'react';
import {useApolloClient} from '@apollo/react-hooks';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../../base-components/ThemeInput/ThemeInput';
import Button from '../../../base-components/Button/Button';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateMomentUtil from '@date-io/moment'; // choose your lib


const SubmitEventForm = () => {
	const client = useApolloClient();
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [selectedDate, handleDateChange] = useState(new Date());

	const moment = new DateMomentUtil();
	const goodDate = moment.date(selectedDate).valueOf()

	console.log(goodDate)

	return (
		<MuiPickersUtilsProvider utils={DateMomentUtil}>
			<Card className='d-flex flex-column p-4'>
				<CardHeader title='Submit a new event' subheader='No drama'/>
				<ThemeInput
					label='Event Name'
					name='event'
					value={username}
					onChange={({target}) => setUsername(target.value)}
				/>
				<ThemeInput
					label='Event Description'
					name='description'
					value={password}
					onChange={({target}) => setPassword(target.value)}
				/>
				<DateTimePicker label='Event date' className='my-4' value={selectedDate} onChange={handleDateChange}/>

				<Button
					type='button'
					className='align-self-center'
				>
					Create Event
				</Button>
			</Card>
		</MuiPickersUtilsProvider>
	);
};

export default SubmitEventForm;