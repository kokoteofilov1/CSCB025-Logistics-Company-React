import { React, useEffect, useState, createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import SignUp from './components/authentication/SignUp';
import SignIn from './components/authentication/SignIn.js';
import AddOffice from './components/admin/AddOffice';
import AdminPanel from './components/admin/AdminPanel';
import Home from './components/Home';
import { AuthContext } from './AuthContext';
import RequestShipment from './components/client/RequestShipment';
import EditProfile from './components/client/EditProfile';
import DisplayOffices from './components/admin/DisplayOffices';

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
					<Route path={'/SignIn'} component={SignIn} />
					<Route path={'/AddOffice'} component={AddOffice} />
					<Route path={'/AdminPanel'} component={AdminPanel} />
					<Route exact path={'/'} component={Home} />
					<Route path={'/RequestShipment'} component={RequestShipment} /> 
					<Route path={'/EditProfile'} component={EditProfile} /> 
					<Route path={'/DisplayOffices'} component={DisplayOffices} />
				</AuthContext.Provider>
			</Switch>
		</Router>
	);
}

export default App;
