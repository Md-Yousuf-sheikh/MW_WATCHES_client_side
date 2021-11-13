import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Modal from '../../Sheard/Modal/Modal';

const OrdersPd = ({ pd }) => {
    const { name, price, img, ratting } = pd;
    const [conform, setConform] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handelOrderDelete = e => {
        setOpenModal(true)
    }
    return (
        <div className="py-4 px-2">
            {
                openModal && <Modal setConform={setConform} setOpenModal={setOpenModal} pd={pd} url={'orders'} />
            }
            {
                conform && <h1>ok done</h1>
            }
            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                <div>
                    <img className="mx-auto" style={{ 'height': "200px" }} src={img} alt="" />
                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-40">
                        <div className="text-justify">
                            <span className="text-md text-justify font-semibold">{name}</span>
                        </div>
                        <div>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                                starCount={5}
                                value={ratting}
                            />
                        </div>
                        <h3>Price: ${price}</h3>
                    </div>
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <div className="pt-2 text-center flex space-x-3">
                        <button className="text-center p-2 text-white bg-green-700  font-bold text-md"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg></button>
                        <button onClick={handelOrderDelete} className="text-center p-2 text-white bg-red-700  font-bold text-md">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrdersPd;