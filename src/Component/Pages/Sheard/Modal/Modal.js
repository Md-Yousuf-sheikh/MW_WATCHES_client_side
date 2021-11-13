import React from 'react';

const Modal = ({ setConform, setOpenModal, pd, url }) => {
    const { _id } = pd;
    const handelDelete = e => {
        fetch(`http://localhost:5000/${url}${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json()
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 1) {
                        setConform(true)
                    }
                }))
    }
    return (
        <div>
            <div class="flex items-center justify-center z-10 fixed left-0 bottom-0 w-full h-full bg-red-50">
                <div class="bg-white rounded-lg w-1/2">
                    <div class="flex flex-col items-start p-4">
                        <div class="flex items-center w-full">
                            <div class=" text-red-600 font-medium uppercase text-lg">---Be careful !---</div>
                            <svg onClick={() => setOpenModal(false)} class="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
                            </svg>
                        </div>
                        <hr />
                        <div class="text-gray-800 mb-2 font-bold">Your product is being canceled. Do you agree? If you agree, confirm or cancel.</div>
                        <hr />
                        <div class="ml-auto flex space-x-3">
                            <button onClick={handelDelete} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Conform
                            </button>
                            <button onClick={() => setOpenModal(false)} class="bg-transparent hover:bg-gray-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;