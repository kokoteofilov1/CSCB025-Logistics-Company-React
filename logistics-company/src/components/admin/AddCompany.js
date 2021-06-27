import { React, useEffect, useState } from "react";
import { addCompany } from "../../api";

function CreateCompany() {
    const formFieldsInitalState = {
        name: ''
    }

    const [formFields, setFormFields] = useState(formFieldsInitalState);

    const formValues = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value
        });
    };

    const submitCompany = async (event) => {
        event.preventDefault();

        try {
            const body = JSON.stringify({
                ...formFields
            });
            console.log(body);
            await addCompany(body);
            setFormFields(formFieldsInitalState);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div class="mt-10 sm:mt-0" >
            <div class="mt-5 md:mt-0 md:col-span-2">
                <form action="#" method="POST" onSubmit={submitCompany}>
                    <div class="shadow overflow-hidden sm:rounded-md">
                        <div class="px-4 py-5 bg-white sm:p-6">
                            <div class="grid grid-cols-6 gap-6">

                                <div class="col-span-6 sm:col-span-3">
                                    <label for="name" class="block text-sm font-medium text-gray-700">
                                        Company Name
                                    </label>
                                    <input 
                                    value={formFields.name} 
                                    onChange={formValues} 
                                    type="text" 
                                    name="name" 
                                    id="name" 
                                    autocomplete="given-name" 
                                    class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                                </div>

                            </div>
                        </div>
                        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add Company
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateCompany;