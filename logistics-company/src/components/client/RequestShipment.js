import { React, useState, useEffect } from 'react';

import NavBar from '../NavBar';
import { getOffices, getUser, createShipment } from "../../api";

function RequestShipment() {
	const [offices, setOffices] = useState([]);
	const [sender, setSender] = useState({});

	const formFieldsInitalState = {
		receiver: '',
		address: '',
		weight: ''
	};

	const [formFields, setFormFields] = useState(formFieldsInitalState);

	const formValues = (event) => {
		setFormFields({
			...formFields,
			[event.target.name]: event.target.value,
		});
	};

	useEffect(() => {
		const getAllOffices = async () => {
			const res = await getOffices();
			setOffices(res.data);
			console.log(res.data);
		}

		const getSender = async () => {
			const senderObj = await getUser(localStorage.getItem('id'));
			setSender(senderObj.data);
			console.log(senderObj.data);
		}

		getAllOffices();
		getSender();
	}, []);

	const allOffices = offices.length > 0 && offices.map((office) => {
		return (
			<option>{office.address}</option>
		);
	});

	const submitShipment = async (event) => {
		event.preventDefault();
		try {
			const body = JSON.stringify({
				target: formFields.recеiver,
				address: formFields.address,
				weight: formFields.weight
			});
			console.log(body);

			await createShipment(body);

			setFormFields(formFieldsInitalState);
		} catch (error) {
			console.log(error);
		}
	};

	let addressField = (
		<div class="col-span-6">
			<label for="address" class="block text-sm font-medium text-gray-700">
				Address
			</label>
			<input
				value={formFields.address}
				onChange={formValues}
				type="text"
				name="address"
				id="address"
				class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
			/>
		</div>
	);

	let officesDropdown = (
		<div class="col-span-6">
			<label for="address" class="block text-sm font-medium text-gray-700">
				Choose an office for your delivery
			</label>
			<select
				onChange={formValues}
				id="address"
				name="address"
				class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
				<option hidden>Choose an office</option>
				{allOffices}
			</select>
		</div>
	);

	return (
		<div>
			<NavBar />

			<div class="flex justify-center my-10">
				<div class="mt-5 md:mt-0 md:col-span-2">
					<form action="#" method="POST" onSubmit={submitShipment}>
						<div class="shadow overflow-hidden sm:rounded-md">
							<div class="px-4 py-5 bg-white sm:p-6">
								<div class="grid grid-cols-6 gap-6">
									<div class="col-span-6 sm:col-span-3">
										<label for="recеiver" class="block text-sm font-medium text-gray-700">
											Recipient Username
										</label>
										<input
											value={formFields.recеiver}
											onChange={formValues}
											type="text"
											name="recеiver"
											id="recеiver"
											autocomplete="given-name"
											class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>

									<div class="col-span-6 sm:col-span-3">
										<label for="weight" class="block text-sm font-medium text-gray-700">
											Package Weight
										</label>
										<input
											value={formFields.weight}
											onChange={formValues}
											type="number"
											name="weight"
											id="weight"
											class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										/>
									</div>

									<div class="col-span-6">
										<label for="option" class="block text-sm font-medium text-gray-700">
											Select a shipment option
										</label>
										<select
											onChange={formValues}
											id="option"
											name="option"
											class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
											<option hidden>shipment options</option>
											<option>to an office</option>
											<option>to an address</option>
										</select>
									</div>

									{formFields.option === 'to an address' && addressField}
									{formFields.option === 'to an office' && officesDropdown}
								</div>
							</div>
							<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
								<button
									type="submit"
									class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
									Send
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default RequestShipment;
