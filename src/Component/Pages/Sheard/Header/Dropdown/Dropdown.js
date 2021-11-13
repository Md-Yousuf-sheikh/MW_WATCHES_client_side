import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Dropdown = ({ isOpen, toggle }) => {
    const { user, logOut } = useAuth();
    return (
        <div
            className={
                isOpen
                    ? 'grid grid-rows-4 text-center font-semibold  z-10 items-center bg-gray-800'
                    : 'hidden'
            }
            onClick={toggle}
        >
            <NavLink className="p-4 text-blue-400 hover:text-green-200" to="/">
                Home
            </NavLink>
            <NavLink className="p-4 text-blue-400 hover:text-green-200" to="/products">
                Watches
            </NavLink>
            <NavLink className="p-4 text-blue-400 hover:text-green-200" to="/dashboard">
                Dashboard
            </NavLink>
            <NavLink className="p-4 text-blue-400 hover:text-green-200" to="/orders">
                Orders
            </NavLink>
            <NavLink className="p-4 text-blue-400 hover:text-green-200" to="/contact">
                Contact
            </NavLink>
            <div className="mx-auto">
                {
                    !user?.email && <Link to="/login" className=" p-4 text-green-200 hover:text-green-400"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z" clip-rule="evenodd" />
                    </svg></Link>
                }
                {
                    user?.email && <button onClick={logOut} className="bg-yellow-500 px-2 my-1 rounded-sm">
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clip-rule="evenodd" />
                        </svg>
                    </button>
                }
            </div>
        </div>
    );
};

export default Dropdown;
