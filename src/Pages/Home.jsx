import React from 'react';
import HeroSection from '../component/HeroSection';
import PopularCourses from '../component/PopularCourses';
import WhyChooseUs from '../component/WhyChooseUs';
import TopInstructors from '../component/TopInstructors';
const corusePromise = fetch('https://learning-platform-server-theta.vercel.app/popular-courses').then(res => res.json())

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <HeroSection></HeroSection>
            <div>
                <PopularCourses corusePromise={corusePromise}></PopularCourses>
                <WhyChooseUs></WhyChooseUs>
                <TopInstructors></TopInstructors>
            </div>

        </div>
    );
};

export default Home;