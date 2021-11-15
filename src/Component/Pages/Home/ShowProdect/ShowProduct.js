import React, { useEffect, useState } from 'react';
import Product from '../../Products/Product/Product';

const ShowProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://limitless-thicket-29802.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [])
    return (
        <div className="bg-gray-100">
            <h1 className="text-3xl font-semibold text-center py-2">Watches</h1>
            <p className="text-center">Out new watches available now!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4">
                {
                    products.slice(0, 6).map(pd => <Product key={pd._id} pd={pd} />)
                }
            </div>
        </div>
    );
};

export default ShowProduct;