import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddOffice() {
	const [formFields, setFormFields] = useState({
		officeName: '',
		phoneNumber: '',
		emailAddress: '',
		country: '',
		streetAddress: '',
		city: '',
		state: '',
		postalCode: '',
	});

	const changeFormValues = (event) => {
		setFormFields({
			...formFields,
			[event.target.name]: event.target.value,
		});
	};

	const history = useHistory();

	const submitOffice = async (event) => {
		event.preventDefault();

		try {
			const body = JSON.stringify({
				...formFields,
			});

			//TODO: submit to backend
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div class="mt-5 md:mt-0 md:col-span-2">
				<form action="#" method="POST" onSubmit={submitOffice}>
					<div class="shadow overflow-hidden sm:rounded-md">
						<div class="px-4 py-5 bg-white sm:p-6">
							<div class="grid grid-cols-6 gap-6">

								<div class="col-span-6 sm:col-span-3">
									<label for="officeName" class="block text-sm font-medium text-gray-700">
										Office name
									</label>
									<input
										type="text"
										name="officeName"
										id="officeName"
										autocomplete="office-name"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>

								<div class="col-span-6 sm:col-span-3">
									<label for="phoneNumber" class="block text-sm font-medium text-gray-700">
										Phone number
									</label>
									<input
										type="tel"
										name="phoneNumber"
										id="phoneNumber"
										autocomplete="phone-number"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>

								<div class="col-span-6 sm:col-span-6">
									<label for="emailAddress" class="block text-sm font-medium text-gray-700">
										Email address
									</label>
									<input
										type="text"
										name="emailAddress"
										id="emailAddress"
										autocomplete="email"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>

								<div class="col-span-6 sm:col-span-3">
									<label for="country" class="block text-sm font-medium text-gray-700">
										Country / Region
									</label>
									<select
										id="country"
										name="country"
										autocomplete="country"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
										onChange={changeFormValues}
										<option>Bulgaria</option>
									</select>
								</div>

								<div class="col-span-6 sm:col-span-6 lg:col-span-3">
									<label for="city" class="block text-sm font-medium text-gray-700">
										City
									</label>
									<input
										type="text"
										name="city"
										id="city"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>

								<div class="col-span-6 sm:col-span-3 lg:col-span-3">
									<label for="state" class="block text-sm font-medium text-gray-700">
										State / Province
									</label>
									<input
										type="text"
										name="state"
										id="state"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>

								<div class="col-span-6 sm:col-span-3 lg:col-span-3">
									<label for="postalCode" class="block text-sm font-medium text-gray-700">
										ZIP / Postal
									</label>
									<input
										type="text"
										name="postalCode"
										id="postalCode"
										autocomplete="postal-code"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>
								
								<div class="col-span-6">
									<label for="streetAddress" class="block text-sm font-medium text-gray-700">
										Street address
									</label>
									<input
										type="text"
										name="streetAddress"
										id="streetAddress"
										autocomplete="street-address"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>
								
							</div>
						</div>
						
						<div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
							<button
								type="submit"
								class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								Create Office
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default AddOffice;
