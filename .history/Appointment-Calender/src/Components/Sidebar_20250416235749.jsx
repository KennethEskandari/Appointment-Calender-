import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => {
    return (
        <div className = 'flex w-1/8 h-screen w-500px bg-red-400 text-black'>
            <ul>
                <li className = ' text-2xl font-bold p-4'>Sidebar</li>
                <li className = ' text-lg p-4'>
                    <Link to="/appointment">Make Appointment</Link>
                </li>
                <li className = ' text-lg p-4'>Get Notifications</li>
            </ul>
            </div>
    )
}
export default Sidebar;