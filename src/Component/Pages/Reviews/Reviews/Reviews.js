import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        fetch('https://limitless-thicket-29802.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    })


    return (
        <div className="py-2 px-4 bg-green-100">
            <h1 className="text-center text-3xl my-2 font-semibold">Customer Feedback </h1>
            <div className="space-y-2">
                {
                    reviews.map(rev => <Review rev={rev} key={rev._id} />)
                }
            </div>
        </div>
    );
};

export default Reviews;