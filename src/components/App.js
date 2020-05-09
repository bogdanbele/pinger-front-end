import React from 'react';

// Styles
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import '../theme/_theme.scss'

// Views
import HomeView from "./view-components/Home";
import MyEventsView from "./view-components/MyEvents";
import SignInView from "./view-components/SignIn";
import AboutView from "./view-components/About";

// Routing
import {HashRouter, NavLink, Route} from "react-router-dom";
import {HideOnAuth, ShowOnAuth} from "./feature-components/routing/";
import {PrivateRoute} from "./feature-components/routing/PrivateRoute";

const App = () => {
	return (
		<HashRouter>
			<div className="App">
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<ShowOnAuth>
						<li><NavLink to="/my-events">My Events</NavLink></li>
					</ShowOnAuth>
					<HideOnAuth>
						<li><NavLink to="/sign-in">Sign In</NavLink></li>
					</HideOnAuth>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
				<div className="content">
					<Route exact path="/" component={HomeView}/>
					<PrivateRoute path="/my-events" component={MyEventsView}/>
					<Route path="/sign-in" component={SignInView}/>
					<PrivateRoute path="/about" component={AboutView}/>
				</div>
			</div>
		</HashRouter>
	);
};

export default App;
