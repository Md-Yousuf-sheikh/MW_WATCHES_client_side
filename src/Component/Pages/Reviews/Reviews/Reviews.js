import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://limitless-thicket-29802.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    });
    var settings = {

        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        speed: 40000,
        autoplaySpeed: 1000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };

    return (
        <div className="bg-gray-100  border-b-4 border-yellow-200">
            <div className="container w-11/12 mx-auto">
                <h1 h1 className="text-center text-3xl mb-1 font-semibold" > Customer Reviews </h1 >
                <div className=" w-2/12 lg:w-1/12 h-1 bg-green-400 mx-auto mb-4"></div>
                <div className="pb-3">
                    <Slider {...settings} className="w-11/12" >
                        {
                            reviews.map(rev => <Review rev={rev} key={rev._id} />)
                        }
                    </Slider>

                </div>
            </div >
        </div >
    );

};

export default Reviews;