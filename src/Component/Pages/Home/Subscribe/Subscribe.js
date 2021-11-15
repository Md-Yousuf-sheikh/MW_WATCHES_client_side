import React from 'react';

const Subscribe = () => {
    return (
        <div>
            <section class="w-full py-3 bg-purple-400">
                <div class="container px-4 mx-auto">
                    <div class="grid grid-cols-1 my-4 lg:grid-cols-3">
                        <div class="flex flex-row text-center justify-center text-white my-auto ">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white my-auto mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                            </svg>
                            <h1 class="font-bold text-3xl">Subscribe for Join Us!</h1>
                        </div>
                        <div class="text-center text-white my-auto">
                            <h2 class="text-xl">Subscribe to get information coupons.</h2>
                        </div>
                        <div class="py-2 mx-4 lg:py-10">
                            <div class="bg-white shadow flex w-full">
                                <input
                                    type="text"
                                    placeholder="Enter your email"
                                    class="w-full rounded-tl-full rounded-bl-full py-2 px-4" />
                                <button class="bg-yellow-400 hover:bg-purple-300 py-2 px-4">
                                    <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                                    </svg>
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