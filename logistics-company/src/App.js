import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn.js';
import AddOffice from './components/admin/AddOffice';

function App() {
	return (
		<Router>
			<Switch>
				<Route path={'/SignUp'} component={SignUp} />
				<Route exact path={'/'} component={SignIn} />
				<Route path={'/AddOffice'} component={AddOffice} />
			</Switch>
		</Router>
	);
}

export default App;
