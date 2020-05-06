import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './theme/_theme.scss'
import {HashRouter, NavLink, Route} from "react-router-dom";
import SignInView from "./components/view-components/SignIn";
import Home from "./components/view-components/Home";
import {PrivateRoute} from "./utils/routing/privateRoute";
import About from "./components/view-components/About";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/login">Sign In</NavLink></li>
					<li><NavLink to="/about">About</NavLink></li>
				</ul>
				<div className="content">
					<Route exact path="/" component={Home}/>
					<Route path="/login" component={SignInView}/>
					<PrivateRoute path="/about" component={About}/>

				</div>

			</div>
		</HashRouter>
	);
}

export default App;
