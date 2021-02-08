import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Store} />
        <Route path="/cart" component={Cart} />
        <Route path="*" component={Error} />
      </Switch>
    </Router>
  )
}

export default Routes;