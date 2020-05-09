import {useQuery} from '@apollo/react-hooks';
import {IS_LOGGED_IN} from '../../../apollo/queries';

export const ShowOnAuth = ({children}) => {
	const {data: {isLoggedIn}} = useQuery(IS_LOGGED_IN);
	return isLoggedIn && children;
};

export const HideOnAuth = ({children}) => {
	const {data: {isLoggedIn}} = useQuery(IS_LOGGED_IN);
	return !isLoggedIn && children;
};