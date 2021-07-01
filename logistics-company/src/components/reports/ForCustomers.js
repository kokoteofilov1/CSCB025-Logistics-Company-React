import { React, useEffect, useState } from 'react';
import { getShipmentsSentByUser, getShipmentsReceivedByUser } from '../../api';
import DisplayShipments from '../DisplayShipments';

function ForCustomers() {
    const [shipments, setShipments] = useState(null)

    const SentByUser = async () => {
        const items = await getShipmentsSentByUser(localStorage.getItem('username'));
        console.log(items);
        setShipments(items.data);
    }

    const ReceivedByUser = async () => {
        const items = await getShipmentsReceivedByUser(localStorage.getItem('username'));
        console.log(items);
        setShipments(items.data);
    }

    return (
        <div>
            <div>

                <button onClick={SentByUser} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Shipments I've Sent
                </button>
                <button onClick={ReceivedByUser} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Shipments I've Received
                </button>

            </div>
            {shipments !== null && <div className="flex justify-center my-10">
                {console.log(shipments)}
                <DisplayShipments shipments={shipments} />
            </div>}
        </div>
    );
}

export default ForCustomers;
