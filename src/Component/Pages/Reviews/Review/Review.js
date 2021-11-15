import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import StarRatingComponent from 'react-star-rating-component';


const Review = ({ rev }) => {
    const { product, name, review, displayName, rider } = rev;
    const { user } = useAuth();

    return (
        <>
            <div className="flex items-start p-3 rounded-lg shadow-sm bg-gray-50">
                <div className="flex-shrink-0">
                    <div className="inline-block relative">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden">
                            <img className="absolute top-0 left-0 w-full h-full bg-cover object-fit object-cover" src={user?.imgUrl || "https://media.istockphoto.com/vectors/male-profile-flat-blue-simple-icon-with-long-shadow-vector-id522855255?k=20&m=522855255&s=612x612&w=0&h=fLLvwEbgOmSzk1_jQ0MgDATEVcVOh_kqEe0rqi7aM5A="} alt="Profile picture" />
                            <div className="absolute top-0 left-0 w-full h-full rounded-full shadow-inner"></div>
                        </div>
                        <svg className="fill-current text-white bg-green-600 rounded-full p-1 absolute bottom-0 right-0 w-6 h-6 -mx-1 -my-1" x viewBox="0 0 20 20">
                            <path d="M19 11a7.5 7.5 0 0 1-3.5 5.94L10 20l-5.5-3.06A7.5 7.5 0 0 1 1 11V3c3.38 0 6.5-1.12 9-3 2.5 1.89 5.62 3 9 3v8zm-9 1.08l2.92 2.04-1.03-3.41 2.84-2.15-3.56-.08L10 5.12 8.83 8.48l-3.56.08L8.1 10.7l-1.03 3.4L10 12.09z" />
                        </svg>
                    </div>
                </div>
                <div className="ml-6">
                    <p className="flex items-baseline">
                        <span className="text-gray-600 font-bold">{displayName}</span>
                        <span className="ml-2 text-green-600 text-xs">Verified Customer</span>
                    </p>
                    <div className="flex items-center text-sm ml-2">
                        <StarRatingComponent
                            name="rate2"
                            editing={false}
                            renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                            starCount={5}
                            value={rider}
                        />
                    </div>
                    <div className="flex items-center mt-4 text-gray-600">
                        <div className="flex items-center">
                            <span className="text-sm">Product Quality</span>
                            <div className="flex items-center text-xs ml-2">
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                                    starCount={5}
                                    value={product}
                                />
                            </div>
                        </div>
                        <div className="flex items-center ml-4">
                            <span className="text-sm">Purchasing Experience</span>
                            <div className="flex items-center text-xs ml-2">
                                <StarRatingComponent
                                    name="rate2"
                                    editing={false}
                                    renderStarIcon={() => <span><i className="fas fa-star"></i></span>}
                                    starCount={5}
                                    value={product}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <span className="font-semibold ">{name}</span>
                        <p className="mt-1">{review}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4 text-sm text-gray-600 fill-current">
                        <button className="flex items-center">
                            <svg className="w-3 h-3" x viewBox="0 0 20 20"><path d="M5.08 12.16A2.99 2.99 0 0 1 0 10a3 3 0 0 1 5.08-2.16l8.94-4.47a3 3 0 1 1 .9 1.79L5.98 9.63a3.03 3.03 0 0 1 0 .74l8.94 4.47A2.99 2.99 0 0 1 20 17a3 3 0 1 1-5.98-.37l-8.94-4.47z" /></svg>
                            <span className="ml-2">Share</span>
                        </button>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Review;