import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import ManagePd from '../../ManagePd/ManagePd';

const ManageProduct = () => {
    const { isLoading } = useAuth()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])
    return (
        <div className="mx-auto">
            <h1 className="text-3xl mt-2 text-center font-mono font-semibold">Manage Product</h1>
            <p className="text-center">Showing all our product! </p>
            {
                isLoading && <div className="flex mt-28 justify-center ">
                    <div class="relative">
                        <div class="w-10 h-10 border-red-500 border-4 rounded-full"></div>
                        <div class="w-10 h-10 border-black border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
                    </div>
                </div>
            }
            {
                !isLoading && <div className="grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        products.map(pd => <ManagePd pd={pd} key={pd._id} />)
                    }
                </div>
            }

        </div>
    );
};

export default ManageProduct;