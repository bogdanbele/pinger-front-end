import React, {useEffect} from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import SignIn from "./components/features/SignIn";
import {useQuery} from "@apollo/react-hooks";
import gql from 'graphql-tag';

const IS_LOGGED_IN = gql`
  query IsUserLoggedIn {
    isLoggedIn @client
  }
`;

function IsLoggedIn() {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  if( loading || !data ) return <p>'Loading'</p>;
  if( error ) return error;
  return data.isLoggedIn ? <p>Esti un bepis</p> : <SignIn />;
}

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="w-100">click</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IsLoggedIn />
      </header>
    </div>
  );
}

export default App;
