import React, { useState } from 'react';
import useAuth from '../../../../Hooks/useAuth';


const AddReview = ({ setOpenReview, pd }) => {
    const { user } = useAuth()
    const [reviews, setReviews] = useState();
    //  Take value
    const handelBlur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newData = { ...reviews };
        newData[filed] = value;
        console.log(newData);
        setReviews(newData);
    }
    // reviews 
    const review = {
        displayName: user?.displayName,
        img: user?.imgUrl,
        name: pd?.name,
        review: reviews?.review,
        product: reviews?.product,
        rider: reviews?.rider,
        experience: reviews?.experience
    }
    // // handel order submit
    const handelOrderSubmit = e => {
        e.preventDefault()
        fetch('https://limitless-thicket-29802.herokuapp.com/reviews', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {

                } else {

                }
            })

        setOpenReview(false)
    }

    return (
        <div class="flex items-center justify-center z-10 fixed left-0 bottom-0 w-full h-full bg-red-50">
            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
                <div className="grid gap-4 gap-y-2 text-sm">
                    <button onClick={() => setOpenReview(false)} className="text-red-400 float-right">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <form onSubmit={handelOrderSubmit} id="Bay-now" className="lg:col-span-2">
                        <div className="flex flex-wrap  mb-6 -mx-3">
                            <div className="w-full px-3">
                                <label className="text-base leading-7 text-blueGray-500" for="review">Reviews *</label>
                                <textarea onBlur={handelBlur} required className="w-full focus:outline-none h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500   apearance-none autoexpand" id="review" type="text" name="review" placeholder="Some description..."></textarea>
                            </div>
                        </div>
                        <h1 className="font-semibold">Ratting</h1>
                        <div className="flex space-x-6 mt-4">
                            <div className="relative">
                                <label for="product" className="text-base leading-7 text-blueGray-500">Product*</label>
                                <select name="product" onBlur={handelBlur} required className="w-full px-4 focus:outline-none  py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="relative">
                                <label for="rider" className="text-base leading-7 text-blueGray-500">Rider*</label>
                                <select name="rider" onBlur={handelBlur} required className="w-full px-4 focus:outline-none  py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                            <div className="relative">
                                <label for="experience" className="text-base leading-7 text-blueGray-500">Experience*</label>
                                <select name="experience" onBlur={handelBlur} required className="w-full px-4 focus:outline-none  py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex items-center w-full pt-4 mb-4">
                            <button type="submit" className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-green-300 hover:bg-green-600 rounded-md focus:shadow-outline focus:outline-none  ">Review shear</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default AddReview;