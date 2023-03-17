import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Browse from './Browse';
import Detail from './Detail';
import Stream from './Stream';
import Profile from './Profile';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

export default class App extends Component {
  render() {
    return(
      <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/browse" component={Browse} />
          <Route path='/detail' component={Detail} />
          <Route path='/stream' component={Stream} />
          <Route path='/profile' component={Profile} />
        </Switch>
      </Router>
      </>
    );
  }
}
