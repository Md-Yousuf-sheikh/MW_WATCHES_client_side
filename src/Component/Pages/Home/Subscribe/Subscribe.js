import React from 'react';
import { FcAdvertising } from "react-icons/fc";
const Subscribe = () => {
    return (
        <div>
            <section className="w-full py-3 bg-purple-400">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-1 my-4 lg:grid-cols-3">
                        <div className="flex flex-row text-center justify-center text-white my-auto ">
                            <FcAdvertising className="text-3xl transform -rotate-12" />
                            <h1 className="font-bold text-3xl">Subscribe for Join Us!</h1>
                        </div>
                        <div className="text-center text-white my-auto">
                            <h2 className="text-xl">Subscribe to get information coupons.</h2>
                        </div>
                        <div className="py-2 mx-4 lg:py-10">
                            <div className="bg-white shadow flex w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    className="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button className="bg-yellow-400 hover:bg-purple-300 py-2 px-4">
                                    <FcAdvertising className="text-2xl" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Subscribe;