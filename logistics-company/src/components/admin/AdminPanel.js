import { isValidElement, React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../NavBar';
import CreateEmployee from './CreateEmployee';
import AddOffice from './AddOffice';
import AddCompany from './AddCompany';
import DisplayOffices from './DisplayOffices'
import DisplayUsers from './DisplayUsers'

function AdminPanel() {
    const [comp, setComp] = useState(null)

    useEffect(() => {
        console.log(1)
    }, [comp]);
    return (
        <div>
            <NavBar />

            <div className="flex justify-center my-10">

                <button onClick={() => setComp(<AddOffice />)} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Add Office
                </button>
                <button onClick={() => setComp(<CreateEmployee />)} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Create Employee
                </button>
                <button onClick={() => setComp(<AddCompany />)} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Add Company
                </button>
                <button onClick={() => setComp(<DisplayOffices />)} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Display Offices
                </button>
                <button onClick={() => setComp(<DisplayUsers />)} className="inline-flex items-center justify-center px-5 py-3 border border-1px text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 mx-4">
                    Display Users
                </button>

            </div>

            <div className="flex justify-center my-10">
                {comp}
            </div>
        </div>
    );
}

export default AdminPanel;
