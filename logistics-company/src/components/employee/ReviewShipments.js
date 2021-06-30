import { React, useEffect, useState } from 'react';
import NavBar from '../NavBar';
import DisplayShipments from '../DisplayShipments';
import { getShipments, getRegisteredShipments } from '../../api';

function ReviewShipments() {
    const [shipments, setShipments] = useState(null)

    useEffect(() => {
        const getAllShipments = async () => {
            const items = await getShipments();
            console.log(items);
            setShipments(items.data);
        }
        getAllShipments();
    }, []);

    return (
        <div>
            <NavBar />
            {shipments && <div className="flex justify-center my-10">
                <DisplayShipments shipments={shipments}/>
            </div>}
        </div>
    );
}

export default ReviewShipments;
