import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import '../theme/_theme.scss';

// Views
import HomeView from './view-components/Home';
import MyEventsView from './view-components/MyEvents';
import SignInView from './view-components/SignIn';
import SignUpView from './view-components/SignUp';
import MyProfileView from './view-components/MyProfile';
import AboutView from './view-components/About';

// Routing
import {HashRouter, NavLink, Route} from 'react-router-dom';
import {HideOnAuth, ShowOnAuth} from './helper-components/routing/';
import {PrivateRoute} from './helper-components/routing/PrivateRoute';
import SearchView from './view-components/Search';
import {useApolloClient, useQuery} from '@apollo/react-hooks';
import {WILL_RELOAD} from 'apollo/queries';

const App = () => {
	const client = useApolloClient();

	const {
		data: {willReload},
	} = useQuery(WILL_RELOAD);

	if (willReload === true) {
		client.writeData({data: {willReload: false}});
		window.history.go();
	}

	return (
		<HashRouter>
			<div className="App">
				<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<ShowOnAuth>
						<li>
							<NavLink to="/my-events">My Events</NavLink>
						</li>
						<li>
							<NavLink to="/search">Search</NavLink>
						</li>
						<li>
							<NavLink to="/my-profile">My Profile</NavLink>
						</li>
					</ShowOnAuth>
					<HideOnAuth>
						<li>
							<NavLink to="/sign-in">Sign In</NavLink>
						</li>
						<li>
							<NavLink to="/sign-up">Sign Up</NavLink>
						</li>
					</HideOnAuth>
					<li>
						<NavLink to="/about">About</NavLink>
					</li>
				</ul>
				<div className="content">
					<Route exact path="/" component={HomeView} />
					<PrivateRoute path="/my-events" component={MyEventsView} />
					<PrivateRoute path="/my-profile" component={MyProfileView} />
					<Route path="/sign-in" component={SignInView} />
					<Route path="/sign-up" component={SignUpView} />
					<PrivateRoute path="/about" component={AboutView} />
					<PrivateRoute path="/search" component={SearchView} />
				</div>
			</div>
		</HashRouter>
	);
};

export default App;
