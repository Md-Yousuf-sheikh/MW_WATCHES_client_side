import React, { useState } from 'react';

const Ratting = () => {
    const [rating, setRating] = useState(null);
    return (
        <div>
            {
                [...Array(5)].map((star => {

                    return (
                        <label>
                            <input type="radio" name="ratting" />
                            <i className=" text-3xl fas fa-star"></i>
                        </label>
                    )
                }))
            }
        </div>
    );
};

export default Ratting;