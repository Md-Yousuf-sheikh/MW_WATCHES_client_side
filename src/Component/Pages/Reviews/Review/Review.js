import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";

const Review = ({ rev }) => {
    const { product, name, review, img, displayName } = rev;
    const DefaultImg = "https://cdn.pixabay.com/photo/2019/08/11/18/59/icon-4399701_1280.png";
    return (
        <>
            <div className="mx-auto text-center w-2/3">
                <div className="">
                    <img className="w-10 h-10 mx-auto rounded-full" src={img || DefaultImg} alt="" />
                    <StarRatingComponent
                        name=""
                        editing={false}
                        renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                        starCount={5}
                        value={product}
                        className="text-sm "
                    />
                    <h1>{displayName}</h1>
                    <h2 className="text-center px-5 text-gray-700">{name}</h2>
                    <p className="text-center text-gray-400 text-sm"><RiSingleQuotesL className="float-left text-md text-green-400" />{review}<RiSingleQuotesR className="float-right text-md text-green-400 " /></p>
                </div>
            </div>
        </>
    );
};

export default Review;