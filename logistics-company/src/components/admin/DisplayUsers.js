import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getUsers, deleteUser } from '../../api';

function DisplayUsers() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const items = await getUsers();
			setUsers(items.data);
			console.log(items.data);
		};
		getItems();
	}, []);

	const handleDelete = async (user) => {
		await deleteUser(user);	
		setUsers(users.filter((item) => item.id !== user.id));
	};

	return (
			<div className="flex flex-col">
				<div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
					<div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
						<div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
							<table className="min-w-full divide-y divide-gray-200">
								<thead>
									<tr>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											User ID
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Username
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Email Address
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Roles
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Office
										</th>
										<th scope="col" className="px-6 py-3 bg-gray-50">
											<span className="sr-only">Edit</span>
										</th>
										<th scope="col" className="px-6 py-3 bg-gray-50">
											<span className="sr-only">Delete</span>
										</th>
									</tr>
								</thead>
								<tbody className="bg-white divide-y divide-gray-200">
									{users.map((user) => (
										<tr key={user._id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{user.id}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{user.username}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{user.email}</div>
											</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{user.roles}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{user.office ? user.office.address : "not an employee" }</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<Link
													to={{
														pathname: '/Edit',
														state: { id: user.id, title: user.username },
													}}>
													Edit
												</Link>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button
													onClick={() => {
														handleDelete(user);
													}}>
													Delete
												</button>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
	);
}

export default DisplayUsers;
