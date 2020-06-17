import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './Components/PrivateRoute'
import Dashboard from './Components/Dashboard'
import Home from './Components/Home'
import Login from './Components/Login'

function Routes() {
    return (
      <Router>
        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard}/>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
}

export default Routes;
