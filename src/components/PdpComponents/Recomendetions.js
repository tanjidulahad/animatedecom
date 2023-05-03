import React from 'react';
import bottle1 from '../../assets/images/pdpbottle1.png'
import bottle2 from '../../assets/images/pdpbottle2.png'
import bottle3 from '../../assets/images/pdpbottle3.png'
import RecomendedProduct from './RecomendedProduct';

const Recomendetions = () => {
    return (
        <div className='my-3'>
            <div className='grid grid-cols-3 gap-14'>
                <RecomendedProduct imgPath={bottle1}/>
                <RecomendedProduct imgPath={bottle2}/>
                <RecomendedProduct imgPath={bottle3}/>
            </div>
        </div>
    );
};

export default Recomendetions;
