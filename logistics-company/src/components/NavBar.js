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
				className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
				Admin Panel
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
										to={'/RequestShipment'}
										className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
										Request Shipment
									</Link>
									<Link
										to={'/ShipmentHistory'}
										className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
										Shipment History
									</Link>

									{/* {isAdmin ? AdminPanelButton() : null} */}
								</div>
							</div>
						</div>
						<div>
							<button
								onClick={() => {
									localStorage.removeItem('accessToken');
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
