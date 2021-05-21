import { React, useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn.js';
import AddOffice from './components/admin/AddOffice';
import Home from './components/homePages/Home';
import { AuthContext } from './AuthContext';
import RequestShipment from './components/client/RequestShipment';

function App() {
	const [isAuthenticated, setIsAuthenticated] = useState(null);

	useEffect(() => {
		if (localStorage.getItem('accessToken') !== null) {
			setIsAuthenticated(true);
		}
	}, []);

	return (
		<Router>
			<Switch>
				<AuthContext.Provider value={isAuthenticated}>
					<Route path={'/SignUp'} component={SignUp} />
					<Route exact path={'/'} component={SignIn} />
					<Route path={'/AddOffice'} component={AddOffice} />
					<Route path={'/Home'} component={Home} />
					<Route path={'/RequestShipment'} component={RequestShipment} /> 
				</AuthContext.Provider>
			</Switch>
		</Router>
	);
}

export default App;
