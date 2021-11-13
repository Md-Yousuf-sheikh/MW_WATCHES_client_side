import React from 'react';
import { NavLink } from 'react-router-dom';

const SideBar = () => {
    return (
        <>
            <div className="hidden lg:flex fixed z-30 inset-y-0 left-0 w-64 transition duration-300 transform bg-gray-900 overflow-y-auto lg:translate-x-0 lg:static lg:inset-0">
                {/* Toggle icon svg */}
                <nav className="mt-10">
                    <NavLink to='/' className={(navInfo) => (navInfo.isActive ? "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-red-200" : "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-gray-100")}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                        <span className="mx-3">Home</span>
                    </NavLink>
                    <NavLink to='dashboardDoc' className={(navInfo) => (navInfo.isActive ? "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-red-200" : "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-gray-100")}>
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                        </svg>
                        <span className="mx-3">Dashboard</span>
                    </NavLink>
                    <NavLink to='makeAdmin' className={(navInfo) => (navInfo.isActive ? "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-red-200" : "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-gray-100")}>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                        </svg>
                        <span className="mx-3">Add Admin</span>
                    </NavLink>

                    <NavLink to='addPost' className={(navInfo) => (navInfo.isActive ? "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-red-200" : "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-gray-100")}>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>

                        <span className="mx-3">Add Post</span>
                    </NavLink>

                    <NavLink to='manageProduct' className={(navInfo) => (navInfo.isActive ? "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-red-200" : "flex items-center mt-4 py-2 px-6  bg-opacity-25 text-gray-100")}>
                        <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        <span className="mx-3">Manage Products</span>
                    </NavLink>
                </nav>
            </div>
        </>
    );
};

export default SideBar;