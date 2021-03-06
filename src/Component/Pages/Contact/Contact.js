import React from 'react';
import Footer from '../Sheard/Footer/Footer';
import Header from '../Sheard/Header/Header/Header';

const Contact = () => {
    return (
        <>
            <Header />
            <div className="p-5">
                <form id="contact-me" class="w-full  mx-auto max-w-3xl bg-white shadow p-8 text-gray-700 ">
                    <h2 class="w-full text-3xl font-bold leading-tight my-5">Contact form</h2>
                    {/* <!-- name field --> */}
                    <div class="flex flex-wrap mb-6">
                        <div class="relative w-full appearance-none label-floating">
                            <input class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="name" type="text" placeholder="Your name" required />
                            <label for="name" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Your name
                            </label>
                        </div>
                    </div>
                    {/* <!-- email field --> */}
                    <div class="flex flex-wrap mb-6">
                        <div class="relative w-full appearance-none label-floating">
                            <input class="tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="name" type="text" placeholder="Your email" required />
                            <label for="name" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">
                                Your email
                            </label>
                        </div>
                    </div>
                    {/* <!-- Message field --> */}
                    <div class="flex flex-wrap mb-6">
                        <div class="relative w-full appearance-none label-floating">
                            <textarea class="autoexpand tracking-wide py-2 px-4 mb-3 leading-relaxed appearance-none block w-full bg-gray-200 border border-gray-200 rounded focus:outline-none focus:bg-white focus:border-gray-500"
                                id="message" type="text" placeholder="Message..."></textarea>
                            <label for="message" class="absolute tracking-wide py-2 px-4 mb-4 opacity-0 leading-tight block top-0 left-0 cursor-text">Message...
                            </label>
                        </div>
                    </div>

                    <div class="">
                        <button class="w-full shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none bg-yellow-500 text-white font-bold py-2 px-4 rounded"
                            type="submit">
                            Send
                        </button>

                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Contact;