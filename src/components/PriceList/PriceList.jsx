import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setPrices(data))
    }, [])
    return (
        <div className='mt-10 mx-12'>
            <h1 className='text-center bg-red-600 text-yellow-500 text-2xl font-bold h-20 py-5'>Affordable Price List</h1>
            <div className='grid md:grid-cols-3 mt-5 gap-5'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }
            </div>
        </div>
    );
};

export default PriceList;