import React from 'react';
import Reviews from '../../Reviews/Reviews/Reviews';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header/Header';
import Banner from '../Banner/Banner';
import ShowProduct from '../ShowProdect/ShowProduct';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {

    return (
        <div className="w-12/12">
            <Header />
            <Banner />
            <ShowProduct />
            <Reviews />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;