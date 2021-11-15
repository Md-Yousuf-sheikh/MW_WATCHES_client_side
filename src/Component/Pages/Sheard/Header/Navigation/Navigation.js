import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Navigation = ({ toggle }) => {
    const { user, logOut, isLoading } = useAuth();
    return (
        <>

            {/* <!-- navbar --> */}
            <nav className="flex  bg-gray-900 text-white">
                <div className="px-5 xl:px-12 py-2 flex w-full items-center">
                    <Link to='/' className=" font-bold font-heading" href="/">
                        <div className="text-3xl"><span className=" text-red-600">M</span>W</div>
                    </Link>
                    {/* Nav Links */}
                    <ul className="hidden md:flex px-2 mx-auto font-semibold font-heading space-x-12">
                        <li><Link to="/" className="text-blue-300 border-dotted border-yellow-400  ">Home</Link></li>
                        <li><Link to="/products" className="text-blue-300 border-dotted border-yellow-400 ">Watches</Link></li>
                        <li><Link to="/dashboard" className="text-blue-300 border-dotted border-yellow-400 ">Dashboard</Link></li>
                        <li><Link to="/contact" className="text-blue-300 border-dotted border-yellow-400 ">Contact Us</Link></li>
                        <li><Link to="/orders" className="text-blue-300 border-dotted border-yellow-400 ">Orders</Link></li>
                    </ul>
                    {/* Header Icons */}
                    <div className="hidden xl:flex  space-x-5 items-center">
                        <a className="hover:text-gray-200" href="/">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                        </a>
                        <a className="flex items-center hover:text-gray-200" href="/">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="flex absolute -mt-5 ml-4">
                                <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500">
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
                <a className="hidden md:flex mr-6 items-center" href="/">
                    <span className="flex items-center hover:text-gray-200" >
                        {
                            !user?.email && <Link to="/login" className=" px-2 my-1 rounded-sm"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
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
                    </span>
                </a>
                <button onClick={toggle} className="navbar-burger self-center mr-12 md:hidden" href="/">
                    <svg className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </>
    );
};

export default Navigation;