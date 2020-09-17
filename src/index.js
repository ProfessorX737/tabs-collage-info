import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Route path="/"
      render={props => <App {...props} />}
    />
  </Router>,
  document.getElementById('root')
);