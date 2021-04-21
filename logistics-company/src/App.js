import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import SignUp from './components/authentication/SignUp';

function App() {
  return (
    <Router>
      <Switch>
        <Route path={'/SignUp'} component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
