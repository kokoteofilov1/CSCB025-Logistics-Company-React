import { React, useEffect, useState } from "react";
import { addEmployee } from "../../api";
import { getOffices } from "../../api";

function CreateEmployee() {
    const [offices, setOffices] = useState([]);

    const formFieldsInitalState = {
        username: '',
        password: '',
        email: '',
        roles: '',
        office: ''
    }

    useEffect(() => {
        const getAllOffices = async() => {
			const res = await getOffices();
			setOffices(res.data);
			console.log(res.data)
		}
		getAllOffices();
    }, []);

    const allOffices = offices.length > 0 && offices.map((office) => {
        return (
            <option>{office.address}</option>
        );
    });

    const [formFields, setFormFields] = useState(formFieldsInitalState);

    const formValues = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        });
    };

    const submitEmployee = async (event) => {
        event.preventDefault();

        try {
            const officeObject = offices.find(obj => obj.address === formFields.office);

            const body = JSON.stringify({
                ...formFields,
                office: {id: officeObject.id, city: officeObject.city, address: officeObject.address, company: officeObject.company},
                roles: [formFields.roles]
            });
            console.log(body);
            await addEmployee(body);
            setFormFields(formFieldsInitalState);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div class="mt-10 sm:mt-0" >
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST" onSubmit={submitEmployee}>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="username" class="block text-sm font-medium text-gray-700">
                                        username
                                    </label>
                                    <input 
                                    value={formFields.username} 
                                    onChange={formValues} 
                                    type="text" 
                                    name="username" 
                                    id="username" 
                                    autocomplete="given-name" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="password" class="block text-sm font-medium text-gray-700">
                                        password
                                    </label>
                                    <input 
                                    value={formFields.password} 
                                    onChange={formValues} 
                                    type="text" 
                                    name="password" 
                                    id="password" 
                                    autocomplete="given-name" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6">
                                    <label for="email" class="block text-sm font-medium text-gray-700">
                                        Email
                                    </label>
                                    <input 
                                    value={formFields.email} 
                                    onChange={formValues} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6">
                                    <label for="phomeNumber" class="block text-sm font-medium text-gray-700">
                                        Phone Number
                                    </label>
                                    <input 
                                    value={formFields.phoneNumber} 
                                    onChange={formValues} 
                                    type="tel" 
                                    name="phoneNumber" 
                                    id="phoneNumber" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6">
                                    <label for="roles" class="block text-sm font-medium text-gray-700">
                                        Select a role
                                    </label>
                                    <select 
                                    onChange={formValues} 
                                    id="roles" 
                                    name="roles" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option hidden>Select a role</option>
                                        <option>ROLE_OFFICE</option>
                                        <option>ROLE_COURIER</option>
                                    </select>
                                </div>

                                <div class="col-span-6">
									<label for="office" class="block text-sm font-medium text-gray-700">
										Office
									</label>
									<select
										id="office"
										name="office"
										autocomplete="office"
										class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
										onChange={formValues}>
										<option hidden>Select Office</option>
										{allOffices}
									</select>
								</div>
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Create Employee
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEmployee;