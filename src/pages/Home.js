import React, { useCallback, useEffect, useRef, useState } from 'react';
import Header from '../components/shared/Header';
import HeroSection from '../components/HomeComponents/HeroSection';
import Banner from '../components/HomeComponents/Banner';
import { FullPage, Slide } from 'react-full-page';
import Portfolio from '../components/HomeComponents/Portfolio';
import Testimonials from '../components/HomeComponents/Testimonials';
import Footer from '../components/shared/Footer';

const Home = () => {

    return (
        <FullPage>
            <Header />
            <Slide>
                <HeroSection />
            </Slide>
            <Slide>
                <Banner />
            </Slide>
            <Slide>
                <Portfolio/>
            </Slide>
            <Slide>
                <Testimonials/>
                <Footer/>
            </Slide>


        </FullPage>
    );
};

export default Home;