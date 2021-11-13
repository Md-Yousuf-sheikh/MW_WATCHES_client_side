import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import useAuth from '../../../Hooks/useAuth';
import Header from '../../Sheard/Header/Header/Header';
import Product from '../Product/Product';

const Products = () => {
    const { isLoading } = useAuth()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);

            })
    }, [])
    return (
        <div className="bg-red-200 min-h-screen">
            <Header />
            <h1 className="text-center text-3xl font-mono mt-2 ">Our All Products</h1>
            <p className="text-center">Our all product hear.</p>
            {
                isLoading && <div className="flex mt-28 justify-center ">
                    <div class="relative">
                        <div class="w-10 h-10 border-red-500 border-4 rounded-full"></div>
                        <div class="w-10 h-10 border-black border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                    </div>
                </div>
            }
            {!isLoading &&
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4">
                    {
                        products.map(pd => <Product pd={pd} key={pd._id} />)
                    }
                </div>
            }


        </div>
    );
};

export default Products;