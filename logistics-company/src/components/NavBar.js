import { React } from 'react';

function NavBar() {
    const history = useHistory();

		const { auth, admin } = useContext(AuthContext);
		const [isAuthenticated, setIsAuthenticated] = auth;
		const [isAdmin, setIsAdmin] = admin;

		async function logOut() {
			if (isAuthenticated) {
				await terminateSession();
				setIsAuthenticated(false);
			}
			history.push('/SignIn');
		}

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
											MovieDB
										</p>
										<Link
											to={'/'}
											className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
											Movies
										</Link>
										<Link
											to={'/UserReviews'}
											className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
											User Reviews
										</Link>

										{isAdmin ? AdminPanelButton() : null}
									</div>
								</div>
							</div>
							<div>
								<button
									to={'/SignIn'}
									onClick={logOut}
									className="px-3 py-2 rounded-md text-sm font-medium text-white bg-gray-900 hover:text-white hover:bg-gray-700">
									{isAuthenticated === null ? '' : isAuthenticated ? 'Sign Out' : 'Sign In'}
								</button>
							</div>
						</div>
					</div>
				</nav>
			</div>
		);
}

export default NavBar;