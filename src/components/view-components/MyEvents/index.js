import React, {useEffect} from 'react';
import gql from 'graphql-tag';
import {useQuery} from "@apollo/react-hooks";

const FETCH_MY_EVENTS = gql`
    query myEvents {
        myEvents{
            title
            description
            createdAt
        }
    }
`;


export default () => {

	const {loading, error, data} = useQuery(FETCH_MY_EVENTS);
	if (loading) return null;
	if (error) console.log(error);
	if (data) {
		console.log(data)
	}


	return (
		<div className="App">
			<header className="App-header">

			</header>
		</div>
	)
};