import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false)
    const handelOnBlur = e => {
        setEmail(e.target.value)
    }

    const handelAdminSubmit = e => {
        const user = { email }
        fetch('https://limitless-thicket-29802.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data)
                    setEmail('')
                    setSuccess(true)
                }

            })

        e.preventDefault();
    }
    return (
        <div className="bg-gray-100  w-screen min-h-screen">
            <div>
                <h1 className="text-3xl py-4 text-center font-semibold">Make new Admin</h1>
            </div>
            {
                success && <div
                    class="bg-green-200 px-6 mb-4 py-2 rounded-md text-md flex items-center mx-auto w-3/4 xl:w-2/4"
                >
                    <svg
                        viewBox="0 0 24 24"
                        class="text-green-600 w-5 h-5 sm:w-5 sm:h-5 mr-3"
                    >
                        <path fill="currentColor" d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                    </svg>
                    <span class="text-green-800"> Make New Admin Successfully! </span>
                </div>
            }
            <div className="flex justify-center flex-wrap items-stretch w-full mb-4 relative">
                <input onBlur={handelOnBlur} type="text" className=" max-w-md flex-shrink flex-grow flex-auto leading-normal  flex-1 border h-10 border-grey-light rounded rounded-r-none px-3 relative" placeholder="Email..." />
                <div className="flex -mr-px">
                    <button onClick={handelAdminSubmit} className="flex items-center leading-normal hover:bg-red-400 bg-red-700 rounded rounded-l-none border border-l-0  px-3 text-white text-sm">Admin</button>
                </div>
            </div>

        </div>
    );
};

export default MakeAdmin;