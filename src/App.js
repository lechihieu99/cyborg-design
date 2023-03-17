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
          <Route exact path="/cyborg-design" component={Home} />
          <Route path="/cyborg-design/browse" component={Browse} />
          <Route path='/cyborg-design/detail' component={Detail} />
          <Route path='/cyborg-design/stream' component={Stream} />
          <Route path='/cyborg-design/profile' component={Profile} />
        </Switch>
      </Router>
      </>
    );
  }
}
