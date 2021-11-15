import React, { useState } from 'react';

const AddPost = () => {
    const [postData, setPostData] = useState({});
    const [addPost, setAddPost] = useState(false)

    const handelBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...postData };
        newData[field] = value;
        console.log(newData);
        setPostData(newData)
    }
    const handelSubmitPost = e => {
        e.preventDefault()
        fetch('https://limitless-thicket-29802.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    setAddPost(true)
                }
            })
        document.getElementById("post-form").reset();
    }
    return (
        <div className=" items-center bg-red-50 w-full  px-5 lg:px-20">
            <h1 className="text-3xl font-semiboeld  text-center">Add New Product</h1>
            {addPost && <div
                class="bg-green-200 px-6 mb-4 py-2 rounded-md text-md flex items-center mx-auto w-3/4 xl:w-2/4"
            >
                <svg
                    viewBox="0 0 24 24"
                    class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                >
                    <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                </svg>
                <span class="text-green-800"> Add post successfully! </span>
            </div>}
            <form onSubmit={handelSubmitPost} id="post-form" className="flex flex-col w-full p-10 px-8 pt-6 mx-auto my-6 mb-4 transition duration-500 ease-in-out transform bg-white border rounded-lg lg:w-1/2 ">
                <div className="relative pt-4">
                    <label for="name" className="text-base leading-7 text-blueGray-500">Name*</label>
                    <input type="text" onBlur={handelBlur} id="name" name="name" required placeholder="name" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform focus:outline-none rounded-lg bg-gray-100  " />
                </div>
                <div className="relative pt-4">
                    <label for="imgUrl" className="text-base leading-7 text-blueGray-500">Img Url*</label>
                    <input type="text" id="imgUrl" onBlur={handelBlur} name="imgUrl" required placeholder="https://" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out transform focus:outline-none rounded-lg bg-gray-100  " />
                </div>
                <div className="flex space-x-6 mt-4">
                    <div className="relative">
                        <label for="name" className="text-base leading-7 text-blueGray-500">Price*</label>
                        <input type="number" id="number" onBlur={handelBlur} name="price" required placeholder="number" className="w-full px-4 py-2 mt-2 mr-4 text-base text-black transition duration-500 ease-in-out focus:outline-none transform rounded-lg bg-gray-100  " />
                    </div>
                    <div className="relative">
                        <label for="ratting" className="text-base leading-7 text-blueGray-500">Ratting*</label>
                        <select name="ratting" onBlur={handelBlur} required className="w-full px-4 focus:outline-none  py-2 mt-2 text-base text-black transition duration-500 ease-in-out transform rounded-lg bg-gray-100">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="flex flex-wrap mt-4 mb-6 -mx-3">
                    <div className="w-full px-3">
                        <label className="text-base leading-7 text-blueGray-500" for="description">Description*</label>
                        <textarea onBlur={handelBlur} required className="w-full focus:outline-none h-32 px-4 py-2 mt-2 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border rounded-lg focus:border-blue-500   apearance-none autoexpand" id="description" type="text" name="description" placeholder="Some description..."></textarea>
                    </div>
                </div>
                <div className="flex items-center w-full pt-4 mb-4">
                    <button className="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none  hover:bg-blue-800 "> Post Now </button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;