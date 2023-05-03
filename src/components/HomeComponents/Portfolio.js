import React from 'react';
import Container from '../shared/Container';
import one from "../../assets/images/01.png"
import two from "../../assets/images/02.png"
import three from "../../assets/images/03.png"
import four from "../../assets/images/04.png"
import girl from "../../assets/images/girl.png"
import boy from "../../assets/images/boy.png"
import bottlehand from "../../assets/images/bottlehand.png"
import A from "../../assets/images/A.png"
import B from "../../assets/images/B.png"
import C from "../../assets/images/C.png"

const Portfolio = () => {
    return (
        <Container>
            <div className='h-[90vh] overflow-hidden'>
                <div className='grid grid-cols-3'>
                    <div className='col-span-1'>
                        <h2 className='text-6xl uppercase italic font-semibold'>Our work<span className='animate-ping'>_</span></h2>
                    </div>
                    <div className='grid grid-cols-2 gap-8 col-span-2'>
                        <div className='p-5 max-w-[16rem] max-h-[8rem]' style={{ backgroundImage: `url(${one})`, backgroundRepeat: "no-repeat",backgroundSize:"contain" }}>
                            <h2 className='capitalize text-lg w-30 font-semibold'>get inspired</h2>
                            <p className='text-[#969696]'>Satisfy all of your inspiration needs in one place. .</p>
                        </div>
                        <div className='p-5 max-w-[16rem] max-h-[8rem]' style={{ backgroundImage: `url(${two})`, backgroundRepeat: "no-repeat",backgroundSize:"contain" }}>
                            <h2 className='capitalize text-lg w-30 font-semibold'>Nano Zero Filtration</h2>
                            <p className='text-[#969696]'>Satisfy all of your inspiration needs in one place. .</p>
                        </div>
                        <div className='p-5 max-w-[16rem] max-h-[8rem]' style={{ backgroundImage: `url(${three})`, backgroundRepeat: "no-repeat",backgroundSize:"contain" }}>
                            <h2 className='capitalize text-lg w-30 font-semibold'>PureV
                                Technology</h2>
                            <p className='text-[#969696]'>Satisfy all of your inspiration needs in one place. .</p>
                        </div>
                        <div className='p-5 max-w-[16rem] max-h-[8rem]' style={{ backgroundImage: `url(${four})`, backgroundRepeat: "no-repeat",backgroundSize:"contain" }}>
                            <h2 className='capitalize text-lg w-30 font-semibold'>Self-Cleaning Worry-Free</h2>
                            <p className='text-[#969696]'>Satisfy all of your inspiration needs in one place. .</p>
                        </div>

                    </div>
                </div>

                <div className='grid grid-cols-3 mt-14'>
                    <div className='p-8 py-10 bg-[#F5F5F5] max-h-[11rem]' style={{ backgroundImage: `url(${A})`, backgroundRepeat: "no-repeat",backgroundSize:"auto",backgroundPosition:"center" }}>
                        <p className='text-center px-10 text-[#13395B] text-2xl font-medium'>One million single use plastic bottles are thrown out every minute!</p>
                    </div>
                    <div className='p-8 py-10 bg-[#F5F5F5] max-h-[11rem]' style={{ backgroundImage: `url(${bottlehand})`, backgroundRepeat: "no-repeat",backgroundSize:"auto",backgroundPosition:"center" }}>
                    </div>
                    <div className='p-8 py-10 bg-[#F5F5F5] max-h-[11rem]' style={{ backgroundImage: `url(${B})`, backgroundRepeat: "no-repeat",backgroundSize:"auto",backgroundPosition:"center" }}>
                        <p className='text-center px-10 text-[#13395B] text-2xl font-medium'>One million single use plastic bottles are thrown out every minute!</p>
                    </div>
                    <div className='p-8 py-10 bg-[#F5F5F5] max-h-[11rem]' style={{ backgroundImage: `url(${girl})`, backgroundRepeat: "no-repeat",backgroundSize:"auto",backgroundPosition:"center" }}>
                        
                    </div>
                    <div className='p-8 py-10 bg-[#F5F5F5] max-h-[11rem]' style={{ backgroundImage: `url(${C})`, backgroundRepeat: "no-repeat",backgroundSize:"auto",backgroundPosition:"center" }}>
                        <p className='text-center px-10 text-[#13395B] text-2xl font-medium'>One million single use plastic bottles are thrown out every minute!</p>
                    </div>
                    <div className='p-8 py-10 bg-[#F5F5F5] max-h-[11rem]' style={{ backgroundImage: `url(${boy})`, backgroundRepeat: "no-repeat",backgroundSize:"auto",backgroundPosition:"center" }}>
                        
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Portfolio;