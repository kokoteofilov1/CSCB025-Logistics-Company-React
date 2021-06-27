import { React, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { addOffice } from "../../api";
import { getCompanies } from "../../api";

function AddOffice() {
	const [companies, setCompanies] = useState([]);

	const [formFields, setFormFields] = useState({
		officeName: '',
		phoneNumber: '',
		email: '',
		country: '',
		city: '',
		address: '',
		company: ''
	});

	useEffect(() => {
        const getAllCompanies = async() => {
			const res = await getCompanies();
			setCompanies(res.data);
			console.log(res.data)
		}
		getAllCompanies();
    }, []);

	const allCompanies = companies.length > 0 && companies.map((company) => {
        return (
            <option>{company.name}</option>
        );
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
			const companyObject = companies.find(obj => obj.name === formFields.company);
			console.log(companyObject);

			const body = JSON.stringify({
				...formFields,
				company: {id: companyObject.id, name: companyObject.name}
			});

			console.log(body);
			addOffice(body);
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
									<label for="email" class="block text-sm font-medium text-gray-700">
										Email address
									</label>
									<input
										type="text"
										name="email"
										id="email"
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
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}>
										<option hidden>Select Country</option>
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
								
								<div class="col-span-6">
									<label for="address" class="block text-sm font-medium text-gray-700">
										Address
									</label>
									<input
										type="text"
										name="address"
										id="address"
										autocomplete="street-address"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}
									/>
								</div>

								<div class="col-span-6">
									<label for="company" class="block text-sm font-medium text-gray-700">
										Company
									</label>
									<select
										id="company"
										name="company"
										autocomplete="company"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={changeFormValues}>
										<option hidden>Select Company</option>
										{allCompanies}
									</select>
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
