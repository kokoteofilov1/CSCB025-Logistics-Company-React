import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';	

import { getShipments, getUser, deleteOffice } from '../api';

function DisplayShipments() {
	const [shipments, setShipments] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const items = await getShipments();
			setShipments(items.data);
			console.log(items.data);
		};
		getItems();
	}, []);

	const getUsernameFromId = async (id) => {
		const user = await getUser(id);
		console.log(user.data)
		return user.data.username
	}

	const handleDelete = async (shipment) => {
		await deleteOffice(shipment);	
		setShipments(shipments.filter((item) => item._id !== shipment._id));
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
											Sender
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Receiver
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Address
										</th>
										<th
											scope="col"
											className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
											Weight
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
									{shipments.map((shipment) => (
										<tr key={shipment._id}>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">
													{/* {getUsernameFromId(shipment.sender)} */}
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900">
													{/* {getUsernameFromId(shipment.receiver)} */}
												</div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900"></div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap">
												<div className="text-sm text-gray-900"></div>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<Link
													to={{
														pathname: '/Edit',
														state: { _id: shipment._id, title: shipment.title },
													}}>
													Edit
												</Link>
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
												<button
													onClick={() => {
														handleDelete(shipment);
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

export default DisplayShipments;
