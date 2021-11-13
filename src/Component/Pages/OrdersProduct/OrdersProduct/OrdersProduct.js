import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Header from '../../Sheard/Header/Header/Header';
import OrdersPd from '../OrdersPd/OrdersPd';

const OrdersProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])
    return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <h1 className="text-3xl font-mono my-2 font-semibold  text-center">Your Order Product</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
                {
                    products.map(pd => <OrdersPd pd={pd} key={pd._id} />)
                }
            </div>
        </div>
    );
};

export default OrdersProduct;