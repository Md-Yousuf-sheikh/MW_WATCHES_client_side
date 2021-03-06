import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../../Sheard/Footer/Footer';
import ManagePd from '../../ManagePd/ManagePd';

const ManageProduct = () => {
    const { isLoading } = useAuth()
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://limitless-thicket-29802.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, [products])
    return (
        <div className="">
            <div>
                <h1 className="text-3xl text-center font-mono font-semibold">Manage Product</h1>
                <p className="text-center">Showing all our product </p>
                {
                    isLoading && <div className="flex mt-28 justify-center ">
                        <div className="relative">
                            <div className="w-10 h-10 border-red-500 border-4 rounded-full"></div>
                            <div className="w-10 h-10 border-black border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
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
            <Footer />
        </div>
    );
};

export default ManageProduct;