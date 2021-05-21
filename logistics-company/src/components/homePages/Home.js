import { React, useState } from 'react';
import NavBar from '../NavBar'
import CreateEmployee from '../admin/CreateEmployee'
import AddOffice from '../admin/AddOffice'
import RequestShipment from '../client/RequestShipment'

function Home() {
    return (
			<div>
				<NavBar />
				<div className="flex justify-center my-10">
					<CreateEmployee />
					<AddOffice />
				</div>
			</div>
		);
}

export default Home;