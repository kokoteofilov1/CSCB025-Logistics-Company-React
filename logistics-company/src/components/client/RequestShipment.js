import { React, useState } from "react";

function RequestShipment() {
    const formFieldsInitalState = {
        recipientFirstName: '',
        recipientLastName: '',
        address: '',
        packageWeight: '',
        phoneNumber: ''
    }

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
            const body = JSON.stringify({
                ...formFields
            });

            console.log(body);

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
                                    <label for="firstName" class="block text-sm font-medium text-gray-700">
                                        Recipient First Name
                                    </label>
                                    <input 
                                    value={formFields.firstName} 
                                    onChange={formValues} 
                                    type="text" 
                                    name="firstName" 
                                    id="firstName" 
                                    autocomplete="given-name" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="lastName" class="block text-sm font-medium text-gray-700">
                                        Recipient Last Name
                                    </label>
                                    <input 
                                    value={formFields.lastName} 
                                    onChange={formValues} 
                                    type="text" 
                                    name="lastName" 
                                    id="lastName" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="packageWeight" class="block text-sm font-medium text-gray-700">
                                        Package Weight
                                    </label>
                                    <input 
                                    value={formFields.packageWeight} 
                                    onChange={formValues} 
                                    type="number" 
                                    name="packageWeight" 
                                    id="packageWeight" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6">
                                    <label for="position" class="block text-sm font-medium text-gray-700">
                                        Select a shipment option
                                    </label>
                                    <select 
                                    onChange={formValues} 
                                    id="position" 
                                    name="position" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option hidden>shipment options</option>
                                        <option>to an office</option>
                                        <option>to an address</option>
                                    </select>
                                </div>

                                <div class="col-span-6">
                                    <label for="address" class="block text-sm font-medium text-gray-700">
                                        Address
                                    </label>
                                    <input 
                                    value={formFields.address} 
                                    onChange={formValues} 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                                <div class="col-span-6">
                                    <label for="phomeNumber" class="block text-sm font-medium text-gray-700">
                                        Recipient Phone Number
                                    </label>
                                    <input 
                                    value={formFields.phoneNumber} 
                                    onChange={formValues} 
                                    type="tel" 
                                    name="phoneNumber" 
                                    id="phoneNumber" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>
                                
                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Send
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RequestShipment;