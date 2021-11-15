import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ "backgroundImage": "url('./hero-banner-tow.jpg')", "backgroundPosition": "top right", "backgroundSize": "cover" }} className="font-mon ">
            <div className="h-screen sm:bg-transparent bg-green-200 flex items-center font-semibold px-4" >
                <div className="">
                    <h1 className="text-3xl md:text-5xl font-semibold font-serif tracking-wider text-yellow-500"><span className="text-red-500">Wear it</span>, flaunt it!</h1>
                    <p className="py-3 mb-4 w-3/4 md:w-2/4 leading-6 tracking-widest ">Explore the range of smartwatches that are designed to tell more than just the time. Check them out below!</p>
                    <Link to="/products" className="bg-red-400 text-sm text-white py-3 px-2" >SHOP COLLECTION</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;