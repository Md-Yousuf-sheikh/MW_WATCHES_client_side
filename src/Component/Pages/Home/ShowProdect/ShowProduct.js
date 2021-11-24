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
        <div className="bg-gray-100 py-8">
            <h1 className="text-4xl font-semibold text-center py-2">New Products</h1>
            <div className="w-12 h-1 bg-green-400 mx-auto mb-4"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4">
                {
                    products.slice(0, 6).map(pd => <Product key={pd._id} pd={pd} />)
                }
            </div>
            <div className="mx-auto py-5 w-11/12 ">
                <div className="grid grid-cols-2 space-x-2 ">
                    <img className="bg-black hover:opacity-75 " src="https://i.ibb.co/Myv9n0w/Banner-22.jpg" alt="" />
                    <img className="bg-black hover:opacity-75 " src="https://i.ibb.co/0Q8H2vV/banner-1-70777f68-9105-439a-95c3-0a23a1262b8b.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ShowProduct;