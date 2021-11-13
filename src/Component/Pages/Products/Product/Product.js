import React from 'react';
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';


const Product = (props) => {
    console.log(props.pd);
    const { name, imgUrl, _id, price, ratting } = props.pd;
    return (
        <div>
            <div className="py-4 px-2">
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
                                    renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                                    starCount={5}
                                    value={ratting}
                                />
                            </div>
                            <h3>Price: ${price}</h3>
                        </div>
                    </div>
                    <div className="absolute opacity-0 fd-sh group-hover:opacity-100">
                        <div className="pt-2 text-center">
                            <Link to={`/products/${_id}`}><button className="text-center p-2 text-white bg-indigo-800 font-bold text-md">Bay now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;