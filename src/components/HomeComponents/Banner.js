import React, { useEffect, useRef } from 'react';
import bottle1 from "../../assets/images/bottle1.png"
import bottle2 from "../../assets/images/bottle2.png"
import bottle3 from "../../assets/images/bottle3.png"
import bottle4 from "../../assets/images/bottle4.png"
import { motion, useAnimation, useInView } from "framer-motion";

const Banner = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const animationControl = useAnimation()

    useEffect(() => {
        if (isInView) {
            animationControl.start('end')
        }
    }, [isInView])
    return (
        <div ref={ref} className='h-[90vh] flex justify-center items-center overflow-hidden'>
            <div className='bg-gradient-to-r from-[#3f5754] to-[#11181e] flex-1 h-[80%] flex justify-center items-center relative'>

                <h2 className='text-6xl text-white w-72 text-center z-10'>A Smart way to sip</h2>
                <motion.div
                variants={{
                    begining: { 
                        y: 200
                    },
                    end: {
                        y: 0,
                        transition: {
                            duration: 1.5,
                            
                        }
                    },

                }}
                initial="begining"
                animate={animationControl}
                 className='absolute top-0 left-0'>
                    <img className='h-[34rem] w-[20rem]' src={bottle1} alt="" />
                </motion.div>
                <motion.div
                variants={{
                    begining: { 
                        y: -800
                    },
                    end: {
                        y: 0,
                        transition: {
                            duration: 1.2,
                            
                        }
                    },

                }}
                initial="begining"
                animate={animationControl}
                 className='absolute -top-[13%] left-[20%]'>
                    <img className='h-[34rem] w-[28rem]' src={bottle2} alt="" />
                </motion.div>
                <motion.div
                variants={{
                    begining: { 
                        y: 200
                    },
                    end: {
                        y: 0,
                        transition: {
                            duration: 1.5,
                            
                        }
                    },

                }}
                initial="begining"
                animate={animationControl}
                className='absolute top-[20%] left-[45%]'>
                    <img className='h-[34rem] w-[28rem]' src={bottle3} alt="" />
                </motion.div>
                <motion.div
                variants={{
                    begining: { 
                        y: -800
                    },
                    end: {
                        y: 0,
                        transition: {
                            duration: 1.2,
                            
                        }
                    },

                }}
                initial="begining"
                animate={animationControl}
                className='absolute -top-[20%] right-0'>
                    <img className='h-[34rem] w-[20rem]' src={bottle4} alt="" />
                </motion.div>




            </div>

        </div>
    );
};

export default Banner;