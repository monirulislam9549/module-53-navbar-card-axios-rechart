import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-blue-700 rounded-md p-4 flex flex-col'>
            <h1 className='text-center'>
                <span className='text-white text-5xl font-extrabold'>{price.price}</span>
                <span className='text-2xl font-bold text-white '>/month</span>
            </h1>
            <h5 className='my-5 text-center text-2xl font-bold text-white'>{price.name}</h5>
            <p className='text-white text-2xl font-bold underline mb-4'>Features:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto p-2 bg-white text-black font-bold rounded hover:bg-black hover:text-white'>Buy Now</button>
        </div>
    );
};

export default PriceCard;