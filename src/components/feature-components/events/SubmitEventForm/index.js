import React, {useState} from 'react';
import {useMutation} from '@apollo/react-hooks';
import Card from '@material-ui/core/Card/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../../base-components/ThemeInput/ThemeInput';
import Button from '../../../base-components/Button/Button';
import {DateTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateMomentUtil from '@date-io/moment'; // choose your lib
import gql from 'graphql-tag';

const CREATE_EVENT = gql`
    mutation createEvent(
        $title: String!,
        $description: String!,
        $scheduledAt: Date!){
        	createEvent(
            	title: $title,
            	description: $description,
            	scheduledAt: $scheduledAt){
            	_id
        }
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


const SubmitEventForm = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, handleDateChange] = useState(new Date());
	const [createEvent] = useMutation(CREATE_EVENT, {
		refetchQueries: [{query: FETCH_MY_EVENTS}],
		awaitRefetchQueries: true,
	});

	const scheduledAt = new DateMomentUtil().date(selectedDate).valueOf();

	return (
		<MuiPickersUtilsProvider utils={DateMomentUtil}>
			<Card className='d-flex flex-column p-4'>
				<CardHeader title='Submit a new event' subheader='No drama'/>
				<ThemeInput
					label='Event Name'
					name='event'
					value={title}
					onChange={({target}) => setTitle(target.value)}
				/>
				<ThemeInput
					label='Event Description'
					name='description'
					value={description}
					onChange={({target}) => setDescription(target.value)}
				/>
				<DateTimePicker label='Event date' className='my-4' value={scheduledAt} onChange={handleDateChange}/>

				<Button
					type='button'
					className='align-self-center'
					onClick={() => createEvent({
						variables: {
							title,
							description,
							scheduledAt,
						},
					})}
				>
					Create Event
				</Button>
			</Card>
		</MuiPickersUtilsProvider>
	);
};

export default SubmitEventForm;