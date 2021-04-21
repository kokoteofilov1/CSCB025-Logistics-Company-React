import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/SignUp'} component={SignUp} />
        <Route path={"/"} component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
