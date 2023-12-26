import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#08314A] ">

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-[#FABF00] font-bold">Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Jared McDowall</h1>
                <h2 className="text-2xl sm:text-5xl font-bold text-[#8892b0]">Computer Science Major</h2>
                <p className="text-[#8892b0] font-bold py-4 max-w-[700px]">Always on a mission to learn and develop technically and personally. 
                Passionate about making a positive difference to the world through technology.</p>
                <div>
        
                {/* Smooth Scroll */}
                <Link to="work" smooth={true} duration={500}> 
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FABF00] hover:border-[#FABF00]">
                        View Work
                        <span className="group-hover:rotate-90 duration-300">
                            <HiArrowNarrowRight className="ml-3" />
                        </span>
                    </button>
                </Link>
                
                </div>
            </div>
        </div>
    );
};

export default Home;