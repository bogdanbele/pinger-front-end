import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import './theme/_theme.scss'
import {HashRouter, NavLink, Route} from "react-router-dom";
import SignInView from "./components/view-components/SignIn";
import Home from "./components/view-components/Home";

function App() {
	return (
		<HashRouter>
			<div className="App">
				<ul>
					<li><NavLink to="/">Home</NavLink></li>
					<li><NavLink to="/sign_in">Sign In</NavLink></li>
				</ul>
				<div className="content">

					<Route exact path="/" component={Home}/>
					<Route path="/sign_in" component={SignInView}/>

				</div>

			</div>
		</HashRouter>
	);
}

export default App;
