import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getShipments, deleteShipment } from '../api';

function DisplayShipments() {
	const [shipments, setShipments] = useState([]);

	useEffect(() => {
		const getItems = async () => {
			const items = await getShipments();
			setShipments(items.data);
			console.log(items.data);
		};
		getItems();
	}, shipments);

	const IDCol = () => {
		console.log('col');
		return (
			<th
				scope="col"
				className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
				ID
			</th>
		);
	};

	const editButton = (shipment) => {
		console.log('edit');
		return (
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
				<Link
					to={{
						pathname: '/Edit',
						state: { id: shipment.id, address: shipment.address },
					}}>
					Edit
				</Link>
			</td>
		)
	}

	const approveButton = (shipment) => {
		console.log('approve');
		return (
			<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
				<Link
					to={{
						pathname: '/Edit',
						state: { id: shipment.id, address: shipment.address },
					}}>
					Approve
				</Link>
			</td>
		)
	}

	const IDField = (shipment) => {
		console.log('field');
		return (
			<td className="px-6 py-4 whitespace-nowrap">
				<div className="text-sm text-gray-900">{shipment.id}</div>
			</td>
		);
	};

	const handleDelete = async (shipment) => {
		await deleteShipment(shipment);
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
									{localStorage.getItem('roles').includes("ROLE_OFFICE") ? IDCol() : null}
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
										{localStorage.getItem('roles').includes("ROLE_OFFICE") ? IDField(shipment) : null}
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{shipment.sender.username}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{shipment.target.username}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{shipment.address}</div>
										</td>
										<td className="px-6 py-4 whitespace-nowrap">
											<div className="text-sm text-gray-900">{Math.round(shipment.weight * 10) / 10}</div>
										</td>
										{localStorage.getItem('roles').includes("ROLE_OFFICE") ? approveButton(shipment) : editButton(shipment)}
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
