import React from "react";
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#08314A] text-white">

            {/* Container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="font-bold">Kia ora! My name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#FD00E3]">Jared McDowall</h1>
                <h2 className="text-2xl sm:text-5xl font-bold">Computer Science Major</h2>
                <p className="font-bold py-4 max-w-[700px]">Always on a mission to learn and develop technically and personally. 
                Passionate about making a positive difference to the world through technology.</p>
                <div>
        
                {/* Smooth Scroll */}
                <Link to="projects" smooth={true} duration={500}> 
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FD00E3] hover:border-[#FFFF]">
                        View Projects
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