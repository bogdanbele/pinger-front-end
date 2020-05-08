import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './theme/_theme.scss'
import {HashRouter, NavLink, Route} from "react-router-dom";
import SignInView from "./components/view-components/SignIn";
import HomeView from "./components/view-components/Home";
import {PrivateRoute} from "./utils/routing/privateRoute";
import About from "./components/view-components/About";
import {HideOnAuth, ShowOnAuth} from "./utils/routing/hiddenLink";
import MyEventsView from "./components/view-components/MyEvents";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<ShowOnAuth>
						<li><NavLink to="/my-events">My Events</NavLink></li>
					</ShowOnAuth>
					<HideOnAuth>
						<li><NavLink to="/login">Sign In</NavLink></li>
					</HideOnAuth>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
				<div className="content">
					<Route exact path="/" component={HomeView}/>
					<Route path="/my-events" component={MyEventsView}/>
					<Route path="/login" component={SignInView}/>
					<PrivateRoute path="/about" component={About}/>
				</div>
			</div>
		</HashRouter>
	);
}

export default App;
