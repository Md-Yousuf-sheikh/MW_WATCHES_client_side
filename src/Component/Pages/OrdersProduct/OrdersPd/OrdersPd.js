import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import AddReview from '../../Sheard/AddReview/AddReview/AddReview';
import Modal from '../../Sheard/Modal/Modal';

const OrdersPd = ({ pd }) => {
    const { name, price, img, ratting } = pd;
    const [conform, setConform] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openReview, setOpenReview] = useState(false);

    const handelOrderDelete = e => {
        setOpenModal(true)
    }
    const handelReview = e => {
        setOpenReview(true)
    }

    return (
        <div className="py-4 px-2">
            {
                openModal && <Modal setConform={setConform} setOpenModal={setOpenModal} pd={pd} url={'orders'} />
            }
            {
                openReview && <AddReview setOpenReview={setOpenReview} pd={pd} />
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
                        <button onClick={handelReview} className="text-center p-2 text-white bg-green-700  font-bold text-md">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                        </button>
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