import { React, useState } from 'react';
import CreateEmployee from '../admin/CreateEmployee'
import AddOffice from '../admin/AddOffice'
import RequestShipment from '../client/RequestShipment'

function Home() {
    return(
        <div>
            <h1>This is the Home Page</h1>
            <div className="flex justify-center my-10">
                <CreateEmployee/>
                <AddOffice/>
                <RequestShipment/>
            </div>
        </div>
    );
}

export default Home;