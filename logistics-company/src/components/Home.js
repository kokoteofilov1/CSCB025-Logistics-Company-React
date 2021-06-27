import { React, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from './NavBar';
import CreateEmployee from './admin/CreateEmployee';
import AddOffice from './admin/AddOffice';

import jwt_decode from 'jwt-decode';

function Home() {
	useEffect(() => {
		const token = localStorage.getItem('accessToken');

		if (token === null) {
			history.push('/SignIn');
		} else {
			const decoded = jwt_decode(token);
			if (decoded.exp < (new Date().getTime() + 1) / 1000) {
				console.log('JWT Token has expired!');
				history.push('/SignIn');
			} else {
				const tokenExpDate = new Date(0);
				tokenExpDate.setUTCSeconds(decoded.exp);
				console.log('JWT Token expires: ' + tokenExpDate);
			}
		}
	}, []);

	let history = useHistory();

	return (
		<div>
			<NavBar />
			<div className="flex justify-center my-10">
				<CreateEmployee />
				<AddOffice />
			</div>
		</div>
	);
}

export default Home;
