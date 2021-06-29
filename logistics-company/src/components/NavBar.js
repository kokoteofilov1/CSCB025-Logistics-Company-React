import { React, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';

import { AuthContext } from '../AuthContext';

function NavBar() {
	const history = useHistory();
	const isAuthenticated = useContext(AuthContext);

	const AdminPanelButton = () => {
		console.log('admin panel button initialized');
		return (
			<Link
				to={'/AdminPanel'}
				className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
				Admin Panel
			</Link>
		);
	};

	const ReviewShipmentsButton = () => {
		console.log('admin panel button initialized');
		return (
			<Link
				to={'/ReviewShipments'}
				className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
				Review Shipments
			</Link>
		);
	};

	return (
		<div>
			<nav className="bg-gray-800">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<div className="hidden md:block">
								<div className="ml-10 flex items-baseline space-x-4">
									<p className="px-3 py-2 rounded-md text-lg font-medium text-gray-300">
										LogisticsAPP
									</p>
									<Link
										to={'/'}
										className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
										Home
									</Link>
									<Link
										to={'/RequestShipment'}
										className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
										Request Shipment
									</Link>
									<Link
										to={'/EditProfile'}
										className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
										EditProfile
									</Link>
									{localStorage.getItem('roles').includes("ROLE_ADMIN") ? AdminPanelButton() : null}
									{localStorage.getItem('roles').includes("ROLE_OFFICE") ? ReviewShipmentsButton() : null}
								</div>
							</div>
						</div>
						<div>
							<button
								onClick={() => {
									localStorage.removeItem('accessToken');
									localStorage.removeItem('userEmail');
									localStorage.removeItem('username');
									localStorage.removeItem('roles');
									localStorage.removeItem('id');
									history.push('/SignIn');
								}}
								className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
								{'Switch Account'}
							</button>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default NavBar;
