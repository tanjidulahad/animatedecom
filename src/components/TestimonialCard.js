import React from 'react';

const TestimonialCard = () => {
    return (
        <div className="w-full bg-white rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 text-white pt-14 pb-5 px-3 relative">
             <div className="flex justify-center md:justify-end absolute -top-10 left-5">
    <img className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500" src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"/>
  </div>
            <p>Say goodbye to your reusable bottles persistent funk — and hello to this Jetsons-worthy update.  My only regret is that I didn't here about this for my first 3 purchases. They did a great job!!</p>
            <div className='flex justify-between mt-3'>
                <div>

                <h2>Jaydon Bator</h2>
                <p className='text-xs'>Sr. Editor</p>
                </div>
                <div className='flex items-end'>
                    <h2 className='italic font-semibold'>OPRAH MAGAZINE</h2>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;