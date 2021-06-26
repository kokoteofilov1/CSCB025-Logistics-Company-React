import { React, useState } from "react";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../NavBar";
import { editUser } from "../../api";

function EditProfile() {
    const history = useHistory();

    const formFieldsInitialState = {
        id: localStorage.getItem('id'),
        email: localStorage.getItem('userEmail'),
        username: localStorage.getItem('username')
    };

    const formFieldsEmptyState = {
        email: '',
        username: ''
    };

    const [formFields, setFormFields] = useState(formFieldsInitialState);

    const changeFormValues = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        });
    };

    const submitUserReview = async (event) => {
        event.preventDefault();
        const body = JSON.stringify({ ...formFields });
        console.log(body)

        setFormFields(formFieldsEmptyState);

        await editUser(body);

        history.goBack();
    };

    return (
        <div>
            <Navbar />
            <div class="flex justify-center my-6">
                <div class="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST" onSubmit={submitUserReview}>
                        <div class="shadow overflow-hidden sm:rounded-md">
                            <div class="px-4 py-5 bg-white sm:p-6">
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6">
                                        <label
                                            for="email"
                                            class="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <input
                                            value={formFields.email}
                                            onChange={changeFormValues}
                                            type="text"
                                            name="email"
                                            autoComplete="email"
                                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label
                                            for="username"
                                            class="block text-sm font-medium text-gray-700">
                                            Username
                                        </label>
                                        <input
                                            value={formFields.username}
                                            onChange={changeFormValues}
                                            type="text"
                                            name="username"
                                            autoComplete="username"
                                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
                                <button
                                    type="submit"
                                    class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditProfile;