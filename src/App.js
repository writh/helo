import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './component/Nav/Nav';
import Auth from './component/Auth/Auth';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import Post from './component/Post/Post';
import Routes from "./routes"
import {Switch, Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={Nav} />
        <Routes/>
      </div>
    );
  }
}

export default App;
