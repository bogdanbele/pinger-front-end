import React, {useState} from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import ThemeInput from '../../base-components/ThemeInput/ThemeInput';
import Button from '../../base-components/Button/Button';
import Card from '@material-ui/core/Card/Card';

const SearchView = () => {

	const [searchInput, setSearchInput] = useState('');

	return (
		<div className="App">
			<header className="App-header justify-content-around">
				<h1>Search</h1>

				<Card className='d-flex flex-column p-4'>
					<CardHeader title='Search for something' subheader='No drama'/>
					<ThemeInput
						label='Event Description'
						name='description'
						value={searchInput}
						onChange={({target}) => setSearchInput(target.value)}
					/>
					<Button
						type='button'
						className='align-self-center'
						onClick={() => console.log('hej')}
					>
						Search
					</Button>
				</Card>
			</header>
		</div>
	);
};

export default SearchView;
