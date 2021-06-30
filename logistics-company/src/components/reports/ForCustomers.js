import { React, useEffect, useState } from 'react';
import { getShipments, getRegisteredShipments } from '../../api';
import DisplayShipments from '../DisplayShipments';

function ForCustomers() {
	const [shipments, setShipments] = useState(null)

    const getAllShipments = async () => {
        const items = await getShipments();
        console.log(items);
        setShipments(items.data);
    }

    const getRegisteredShipments = async () => {
        const items = await getRegisteredShipments();
        console.log(items);
        setShipments(items.data);
    }

	return (
		<div>
            <div className="flex justify-center my-10">
                <button onClick={getAllShipments} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    All Shipments
                </button>
            </div>

            <div className="flex justify-center my-10">
                <button onClick={getRegisteredShipments} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Registered Shipments
                </button>
            </div>

            {shipments !== null && <div className="flex justify-center my-10">
                {console.log(shipments)}
                <DisplayShipments shipments={shipments}/>
            </div>}
        </div>
	);
}

export default ForCustomers;
