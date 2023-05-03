import React from 'react';
import Container from './Container';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <div className='flex justify-between py-5'>
                <div>
                    <Link to="/"><h2 className='text-xl font-bold text-[#13395B] cursor-pointer'>Arachonmesh</h2></Link>
                </div>
                <div className='flex gap-12'>
                    <div className='flex gap-12 text-lg font-semibold '>
                        <h6 className='text-black cursor-pointer'>Home</h6>
                        <h6 className='text-gray-400 cursor-pointer'>About</h6>
                        <h6 className='text-gray-400 cursor-pointer'>Bottles</h6>
                        <h6 className='text-gray-400 cursor-pointer'>Contact</h6>
                    </div>
                    <div>
                        <button className='px-5 py-1 rounded-sm bg-gradient-to-t from-[#F3A261] to-[#E9C46B]'>Login</button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Header;