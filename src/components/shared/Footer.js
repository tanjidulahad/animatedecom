import React from 'react';
import {ImLinkedin2,ImTwitter,ImWhatsapp,ImFacebook} from "react-icons/im"

const Footer = () => {
    return (
        <div className='relative h-[35vh]'>

            <div className='grid grid-cols-2 mx-32 mt-5'>
                <div className='col-span-1'>
                    <div className='grid grid-cols-3'>
                        <div>
                            <h3 className='font-bold'>Help</h3>
                            <ul className='space-y-3 font-semibold'>
                                <li className='mt-3'>FAQ</li>
                                <li>Review</li>
                                <li>My account</li>
                                <li>Corporate</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold'>Shop</h3>
                            <ul className='space-y-3 font-semibold'>
                                <li className='mt-3'>FAQ</li>
                                <li>Review</li>
                                <li>My account</li>
                                <li>Corporate</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold'>About</h3>
                            <ul className='space-y-3 font-semibold'>
                                <li className='mt-3'>FAQ</li>
                                <li>Review</li>
                                <li>My account</li>
                                <li>Corporate</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='col-span-1'>
                    <h2 className='font-semibold text-lg'>Sign up for the newsletter</h2>
                    <div className='w-full border border-black pl-5 rounded-full mt-3 p-[2px]'>
                        <input className='w-[80%] border-none outline-none' type="text" placeholder='Enter your Email'/>
                        <button className='text-center w-[20%] bg-gradient-to-b from-[#004E84] to-[#01ADEB] rounded-full py-3 text-white'>SIGN UP</button>
                    </div>

                </div>

            </div>

            {/* copyright section */}
            <div className='absolute bottom-5 z-50 flex justify-between w-full px-32 text-white'>
                <div>
                    <p>Copyright Arachonmesh 2022</p>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>
                        
                    <ImLinkedin2 color='black' size={12}/>
                    </div>
                    <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>
                        
                    <ImFacebook color='black' size={12}/>
                    </div>
                    <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>
                        
                    <ImTwitter color='black' size={12}/>
                    </div>
                    <div className='bg-white p-2 rounded-full cursor-pointer hover:rotate-[360deg] duration-300'>
                        
                    <ImWhatsapp color='black' size={12}/>
                    </div>
                    
                    
                    
                </div>
                <div className='flex gap-20'>
                    <div>
                        <p>T&C</p>
                    </div>
                    <div>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </div>

            <div className="ocean">
                <div className="wave"></div>
                <div className="wave"></div>
                <div className="wave"></div>
            </div>
        </div>
    );
};

export default Footer;