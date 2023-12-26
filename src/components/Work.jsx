import React from "react";
import portfolio from "../assets/portfolio-1.0.png";
import adoption from "../assets/pet-adoption.png";

const Work = () => {
    return (
        <div name='work' className="w-full md:h-screen text-gray-300 bg-[#08314A]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#FABF00]">Work</p>
                    <p className="py-6">Here is a small collection of some of my recent work.
                     I am constantly working on new projects, where I will update this section accordingly.</p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">

                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${portfolio})`}} 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-xl font-bold text-white tracking-wider">
                            Static HTML, CSS, <br/>and JavaScript Website
                            </span>

                            <div className="pt-8 text-center"> 
                                <a className="mx-2" href="https://rocky7211.github.io/Portfolio1.0/">
                                    <button className="text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a className="mx-2" href="https://github.com/rocky7211/Portfolio1.0">
                                    <button className="text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Grid Item */}
                    <div style={{backgroundImage: `url(${adoption})`}} 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                        {/* Hover Effects */}
                        <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-2xl font-bold text-white tracking-wider">
                                Static HTML and CSS Website
                            </span>

                            <div className="pt-8 text-center"> 
                                <a className="mx-2" href="https://rocky7211.github.io/Pet-Adoption/">
                                    <button className="text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                                </a>
                                <a className="mx-2" href="https://github.com/rocky7211/Pet-Adoption">
                                    <button className="text-center rounded-lg px-4 py-3 my-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Work;