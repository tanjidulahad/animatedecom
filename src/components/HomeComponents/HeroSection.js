import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from "framer-motion";
import bottlecap from "../../assets/images/bottlecap.png"
import bottle from "../../assets/images/bottle.png"
import { BsCart3 } from "react-icons/bs"
import { Link } from 'react-router-dom';

const HeroSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const animationControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            animationControl.start('end')
        }
    }, [isInView])
    return (
        <div className='relative'>
            <div ref={ref}>
                {/* wrapper */}

                <div className='flex flex-col justify-center items-center h-[90vh] overflow-hidden'>

                    {/* circle */}
                    <div className='w-full flex flex-col justify-center items-center relative'>
                        <motion.div
                            variants={{
                                begining: {

                                    scale: 0.6,
                                    y: -50
                                },
                                end: {
                                    scale: 1,
                                    y: 0,
                                    transition: {
                                        duration: 1.5,

                                    }
                                },

                            }}
                            initial="begining"
                            animate={animationControl}
                            className='w-60 h-60 min-w-20 min-h-20 rounded-full border-2 border-black'></motion.div>
                        <div className='absolute w-[40%]'>
                            <motion.div
                                variants={{
                                    begining: {
                                        opacity: 0,
                                        scale: 0.5
                                    },
                                    end: {
                                        opacity: 1,
                                        scale: 1,
                                        transition: {
                                            duration: 1.5,
                                            delay: 0.8
                                        }
                                    }
                                }}
                                initial="begining"
                                animate={animationControl}
                            >
                                <h2 className='text-center text-5xl '>Self Cleaning bottle</h2>
                                <h2 className='text-center text-5xl '>In 60 Seconds</h2>
                                <p className='text-xs text-center mt-5'>Hit refresh with the intelligently clean bottle built for adventure.</p>
                            </motion.div>
                            <motion.div
                                variants={{
                                    begining: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    end: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1.5,
                                            delay: 0.8
                                        }
                                    }
                                }}
                                initial="begining"
                                animate={animationControl}
                                className='text-center mt-5'>
                                <button className='px-5 py-1 rounded-sm bg-gradient-to-t from-[#F3A261] to-[#E9C46B]'>Know More</button>
                            </motion.div>
                        </div>
                        {/* bottle cap */}
                        <motion.div
                            variants={{
                                begining: {
                                    y: 0
                                },
                                end: {
                                    y: 385,
                                    transition: {
                                        duration: 1.5,
                                        ease: "easeOut"
                                    }
                                }
                            }}
                            initial="begining"
                            animate={animationControl}
                            className='absolute -top-28 z-10'>
                            <img src={bottlecap} alt="" />
                        </motion.div>
                        <motion.div
                            variants={{
                                begining: {
                                    y: 0
                                },
                                end: {
                                    y: 140,
                                    transition: {
                                        delay: 0.6,
                                        duration: 1,
                                        ease: "easeOut"

                                    }
                                }
                            }}
                            initial="begining"
                            animate={animationControl}
                            className='absolute -bottom-80'>
                            <img src={bottle} alt="" />
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='absolute bottom-16 right-0'>
                <Link to="/productdetails">
                    <div className='bg-[#13395B] text-white rounded py-2 flex items-center justify-center gap-2 cursor-pointer px-5'>

                        <BsCart3 />
                        <p>Add to cart</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default HeroSection;