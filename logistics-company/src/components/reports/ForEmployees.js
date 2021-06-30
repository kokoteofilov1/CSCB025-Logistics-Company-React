import { React, useState } from 'react';
import { getShipments, getRegisteredShipments, getRegisteredShipmentsByUser, getRegisteredShipmentsNotDelivered, getShipmentsSentByUser, getShipmentsReceivedByUser } from '../../api';
import DisplayShipments from '../DisplayShipments';

function ForEmployees() {
    const [shipments, setShipments] = useState(null)

    const formFieldsInitalState = {
        registeredByUser: '',
        sentByUser: '',
        receivedByUser: ''
    };

    const [formFields, setFormFields] = useState(formFieldsInitalState);

    const formValues = (event) => {
        setFormFields({
            ...formFields,
            [event.target.name]: event.target.value,
        });
    };

    const AllShipments = async () => {
        const items = await getShipments();
        console.log(items);
        setShipments(items.data);
    }

    const ApprovedShipments = async () => {
        const items = await getRegisteredShipments();
        console.log(items);
        setShipments(items.data);
    }

    const RegisteredByEmployee = async () => {
        const items = await getRegisteredShipmentsByUser(formFields.registeredByUser);
        console.log(items);
        setShipments(items.data);
    }

    const RegisteredButNotDelivered = async () => {
        const items = await getRegisteredShipmentsNotDelivered();
        console.log(items);
        setShipments(items.data);
    }

    const SentByUser = async () => {
        const items = await getShipmentsSentByUser(formFields.sentByUser);
        console.log(items);
        setShipments(items.data);
    }

    const ReceivedByUser = async () => {
        const items = await getShipmentsReceivedByUser(formFields.receivedByUser);
        console.log(items);
        setShipments(items.data);
    }

    return (
        <div>
            <div className="flex justify-center my-10">
                <button onClick={AllShipments} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    All Shipments
                </button>

                <button onClick={ApprovedShipments} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Registered Shipments
                </button>

                <div class="col-span-6 sm:col-span-3">
                    <label for="registeredByUser" class="block text-sm font-medium text-gray-700">
                        Registered by (username)
                    </label>
                    <input
                        value={formFields.registeredByUser}
                        onChange={formValues}
                        type="text"
                        name="registeredByUser"
                        id="registeredByUser"
                        autocomplete="given-name"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <button onClick={RegisteredByEmployee} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Registered By Employee
                </button>

                <button onClick={RegisteredButNotDelivered} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Registered But Not Delivered
                </button>

                <div class="col-span-6 sm:col-span-3">
                    <label for="sentByUser" class="block text-sm font-medium text-gray-700">
                        Sent by (username)
                    </label>
                    <input
                        value={formFields.sentByUser}
                        onChange={formValues}
                        type="text"
                        name="sentByUser"
                        id="sentByUser"
                        autocomplete="given-name"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <button onClick={SentByUser} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Sent By User
                </button>

                <div class="col-span-6 sm:col-span-3">
                    <label for="sentBreceivedByUseryUser" class="block text-sm font-medium text-gray-700">
                        Received by (username)
                    </label>
                    <input
                        value={formFields.receivedByUser}
                        onChange={formValues}
                        type="text"
                        name="receivedByUser"
                        id="receivedByUser"
                        autocomplete="given-name"
                        class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>

                <button onClick={ReceivedByUser} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Received By User
                </button>
            </div>

            {shipments !== null && <div className="flex justify-center my-10">
                {console.log(shipments)}
                <DisplayShipments shipments={shipments} />
            </div>}
        </div>
    );
}

export default ForEmployees;
