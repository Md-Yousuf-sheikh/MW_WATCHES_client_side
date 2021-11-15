import React from 'react';
import { useEffect, useState } from 'react';
import Header from '../../Sheard/Header/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://limitless-thicket-29802.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, [])
    console.log('helo');
    return (
        <div className="bg-red-200 min-h-screen">
            <Header />
            <h1 className="text-center text-3xl font-mono mt-2 ">Our All Products</h1>
            <p className="text-center">Our all product hear.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
                {
                    products.map(pd => <Product pd={pd} key={pd._id} />)
                }
            </div>
        </div>
    );
};

export default Products;