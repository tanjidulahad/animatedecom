import React from 'react';
import Header from '../components/shared/Header';
import ProductImageSlider from '../components/PdpComponents/ProductImageSlider';
import StarRatings from 'react-star-ratings'
import { BsCart3, BsHeart } from 'react-icons/bs'
import visa from '../assets/images/visa.png'
import masterCard from '../assets/images/master-card.png'
import payPal from '../assets/images/pay-pal.png'
import Recomendetions from '../components/PdpComponents/Recomendetions';
import Footer from '../components/shared/Footer';

const ProductDetails = () => {
    return (
        <div>
            <Header />
            <div className='mx-32 '>
                <h2 className='uppercase text-3xl font-bold'>bottle filtered<span className='animate-ping'>_</span></h2>
            </div>
            <div className='mx-32 my-3 flex justify-between border-b pb-3'>
                <ul className='flex gap-5 items-center'>
                    <li className='border border-gray-500 px-2 py-1 rounded text-[#13395B]'>General Info</li>
                    <li className='text-gray-500'>Product Details</li>
                    <li className='text-gray-500'>Review</li>
                </ul>
                <div className='flex flex-col items-center'>
                    <StarRatings
                        rating={4}
                        starRatedColor="#F89828"
                        numberOfStars={5}
                        starDimension="15px"
                        starSpacing="2px"
                        name='rating'
                    />
                    <h6 className='self-end'>12 reviews</h6>
                </div>
            </div>
            <div className='grid grid-cols-2 mx-32'>

                <ProductImageSlider />
                <div>
                    <div className='flex gap-2'>
                        <p className='font-bold text-lg'>$150.00</p>
                        <p className='line-through text-gray-500 text-lg'>$300.00</p>
                        <p className='bg-[#FF4242] text-white p-[1px] px-1 rounded'>-50%</p>
                    </div>
                    <div className='mt-3'>
                        <p className='mb-2'>Color</p>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-3'>
                                <div className='p-1 border border-black rounded-full cursor-pointer'>
                                    <div className='h-5 w-5 bg-black rounded-full'></div>
                                </div>
                                <div className='p-1 border border-black rounded-full cursor-pointer'>
                                    <div className='h-5 w-5 bg-white rounded-full'></div>
                                </div>
                                <div className='p-1 border border-black rounded-full cursor-pointer'>
                                    <div className='h-5 w-5 bg-green-600 rounded-full'></div>
                                </div>
                            </div>
                            <div>
                                <ul className='flex gap-5 items-center'>
                                    <li className='border border-[#17696A] px-2 py-1 rounded text-[#17696A] cursor-pointer'>Insulated</li>
                                    <li className='border border-gray-500 px-2 py-1 rounded text-gray-500 cursor-pointer'>Non Insulated</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='mb-2'>Size</p>
                        <div className='border border-gray-300 px-3 py-1 rounded'>
                            <select className='w-full outline-none border-none' name="" id="">
                                <option value="">12oz</option>
                                <option value="">13oz</option>
                                <option value="">14oz</option>
                            </select>
                        </div>
                    </div>
                    <div className='my-8 flex gap-3'>
                        <div className='basis-1/6 border border-gray-300 py-2 w-16 px-2'>
                            <input className='outline-none border-none w-full' type="number" defaultValue={1} />
                        </div>
                        <div className='basis-3/6 bg-[#13395B] text-white rounded py-2 flex items-center justify-center gap-2 cursor-pointer'>
                            <BsCart3 />
                            <p>Add to cart</p>
                        </div>
                        <div className='basis-2/6 rounded border-[#13395B] border py-2 flex items-center justify-center gap-2 cursor-pointer'>
                            <BsHeart />
                            <p>Favourite</p>
                        </div>
                    </div>
                    <div className='mt-3 border-b'>
                        <h3 className='font-bold ml-10'>Delivery</h3>
                        <p className='my-2'>Free standard shipping on orders over $35 before tax, plus free returns.</p>
                        <div className='mx-5'>
                            <div className='flex justify-between border-b pb-3'>
                                <h6 className='text-gray-500 basis-1/3'>TYPE</h6>
                                <h6 className='text-gray-500 basis-1/3'>HOW LONG</h6>
                                <h6 className='text-gray-500 basis-1/3'>HOW MUCH</h6>
                            </div>
                            <div className='flex justify-between border-b pb-3 pt-2'>
                                <p className='basis-1/3'>Standard delivery</p>
                                <p className='basis-1/3'>1-4 business days</p>
                                <p className='basis-1/3'>$4.50</p>
                            </div>
                            <div className='flex justify-between border-b pb-3 pt-2'>
                                <p className='basis-1/3'>Express delivery</p>
                                <p className='basis-1/3'>1 business day</p>
                                <p className='basis-1/3'>$10.00</p>
                            </div>
                            <div className='flex justify-between pt-2 pb-3'>
                                <p className='basis-1/3'>Pick up in store</p>
                                <p className='basis-1/3'>1-3 business days</p>
                                <p className='basis-1/3'>Free</p>
                            </div>

                        </div>
                    </div>
                    <div className='mt-3 border-b pb-3'>
                        <h3 className='font-bold ml-10'>Return</h3>
                        <p className='my-2'>You have 15 days to return the item(s) using any of the following methods:</p>
                        <div>
                            <ul className='space-y-1'>
                                <li className='list-disc'>Free store return</li>
                                <li className='list-disc'>Free returns via USPS Dropoff Service</li>
                            </ul>
                        </div>
                    </div>
                    <div className='mt-3 flex justify-between py-5'>
                        <div>
                            <img src={visa} alt="" />
                        </div>
                        <div>
                            <img src={masterCard} alt="" />
                        </div>
                        <div>
                            <img src={payPal} alt="" />
                        </div>
                        </div>
                </div>
            </div>
            <div className='mx-32'>
                <h2 className='text-3xl font-bold'>Recomendations<span className='animate-ping'>_</span></h2>
                <Recomendetions/>
            </div>
            <div className='border-t-2 border-[#13395B] mt-10'>
            <Footer/>
            </div>
        </div>
    );
};

export default ProductDetails;