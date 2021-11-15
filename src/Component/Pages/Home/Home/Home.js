import React from 'react';
import Reviews from '../../Reviews/Reviews/Reviews';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header/Header';
import Banner from '../Banner/Banner';
import Brand from '../Brand/Brand';
import ShowProduct from '../ShowProdect/ShowProduct';
import Subscribe from '../Subscribe/Subscribe';

const Home = () => {

    return (
        <div>
            <Header />
            <Banner />
            <ShowProduct />
            <Brand />
            <Reviews />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default Home;