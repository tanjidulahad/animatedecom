import React from 'react';

const RecomendedProduct = ({imgPath}) => {
    return (
        <div className='group'>
            <div className='bg-[#00588F33] border rounded-3xl flex justify-center items-center py-10 group-hover:bg-white group-hover:border-[#13395B] duration-500 relative'>
                <img className='w-52 h-52 object-contain group-hover:opacity-50 group-hover:-rotate-[30deg] duration-500' src={imgPath} alt="" />
                <div className='absolute'>
                    <h3 className='font-bold text-[#13395B] text-lg text-center mb-2 opacity-0 group-hover:opacity-100 duration-500'>Select Size:</h3>
                    <div className='flex justify-between gap-5'>
                        <div className='border border-[#13395B] rounded p-2 scale-0 group-hover:scale-100 duration-500 cursor-pointer'>
                            <p>17 oz</p>
                        </div>
                        <div className='border border-[#13395B] rounded p-2 scale-0 group-hover:scale-100 duration-500 cursor-pointer'>
                            <p>23 oz</p>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-center font-bold text-lg text-[#13395B]'>Monaco Green</h3>
            <p className='text-center'>PureV</p>
        </div>
    );
};

export default RecomendedProduct;