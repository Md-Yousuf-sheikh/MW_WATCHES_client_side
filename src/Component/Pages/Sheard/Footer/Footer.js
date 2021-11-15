import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="pt-10">
                <footer className="text-gray-600 body-font  bg-gray-700">
                    <div className="container px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <p className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">

                                <span className="ml-3 text-xl text-white">MW</span>
                            </p>
                            <p className="mt-2 text-sm text-white">Our product is the best Product</p>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Quick Link</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <p className="text-white hover:text-red-300" >Home</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Product</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Orders</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Reviews</p>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Service</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <p className="text-white hover:text-red-300" >Life time service</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >All Days</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Happy shopping</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Best product</p>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Help</h2>
                                <nav className="list-none mb-10">
                                    <li>
                                        <p className="text-white hover:text-red-300" >Facebook</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >instagram</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Twitter</p>
                                    </li>
                                    <li>
                                        <p className="text-white hover:text-red-300" >Contact us</p>
                                    </li>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900 py-2">
                        <h1 className="text-center text-gray-600 ">@ Copyright by MW Watches </h1>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;