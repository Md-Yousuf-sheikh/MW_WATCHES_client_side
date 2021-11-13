import React, { useState } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import Modal from '../../Sheard/Modal/Modal';

const ManagePd = ({ pd }) => {
    const { name, imgUrl, price, ratting } = pd;
    const [conform, setConform] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const handelOrderDelete = e => {
        setOpenModal(true)
    }
    return (
        <div className="py-4 px-2">
            {
                openModal && <Modal setConform={setConform} setOpenModal={setOpenModal} pd={pd} url={'products'} />
            }{
                conform && <h1>delete</h1>
            }
            <div className="shadow-lg group container  rounded-md bg-white  max-w-sm flex justify-center items-center  mx-auto content-div">
                <div>
                    <img className="mx-auto" style={{ 'height': "200px" }} src={imgUrl} alt="" />
                    <div className="py-8 px-4 bg-white  rounded-b-md fd-cl group-hover:opacity-40">
                        <div className="text-justify">
                            <span className="text-md text-justify font-semibold">{name}</span>
                        </div>
                        <div>
                            <StarRatingComponent
                                name="rate2"
                                editing={false}
                                renderStarIcon={() => <span><i class="fas fa-star"></i></span>}
                                starCount={5}
                                value={ratting}
                            />
                        </div>
                        <h3>Price: ${price}</h3>
                    </div>
                </div>
                <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                    <div className="pt-2 text-center flex space-x-2">
                        <button className="text-center p-2 text-white bg-green-400 font-bold text-md">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </button>
                        <button onClick={handelOrderDelete} className="text-center p-2 text-white bg-red-400 font-bold text-md">
                            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagePd;