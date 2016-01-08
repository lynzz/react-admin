import React from 'react';
import { render } from 'react-dom'
import { browserHistory, Router, Route, Link, Redirect } from 'react-router'

import '../common/lib';

import App from '../component/App';
import User from '../component/User';
import MyForm from '../component/Form';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="/user" component={User} />
      <Route path="/form" component={MyForm} />
    </Route>
  </Router>
), document.getElementById('app'))

