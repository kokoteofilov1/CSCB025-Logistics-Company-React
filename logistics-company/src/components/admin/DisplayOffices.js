import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../NavBar';

import { getOffices, deleteOffice } from '../../api';

function DisplayOffice() {
	const [offices, setOffices] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const items = await getOffices();
			setOffices(items.data);
			console.log(items.data);
		};
		getItems();
	}, []);

	const handleDelete = async (office) => {
		await deleteOffice(office);	
		setOffices(offices.filter((item) => item._id !== office._id));
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
											Office ID
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Country
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											City
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Address
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Phone number
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Email address
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
									{offices.map((office) => (
										<tr key={office._id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{office.id}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">Bulgaria</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{office.city}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">{office.address}</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">* No phone number available. *</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">* No email-address available. *</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<Link
													to={{
														pathname: '/Edit',
														state: { _id: office._id, title: office.title },
													}}>
													Edit
												</Link>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button
													onClick={() => {
														handleDelete(office);
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

export default DisplayOffice;
