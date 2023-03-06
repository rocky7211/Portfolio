import React from "react";

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#192231] text-gray-300">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#46bcde]">About</p>
                    </div>
                    <div></div>
                    </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>I'm Jared, nice to meet you.</p>
                    </div>
                    <div>
                        <p> I am in my final year of BSc Computer Science and Statistics at The University of Auckland.
                            Currently, my interests are lying with software development and security, with a bit of data science on the side.
                            I'm committed to learning as much as I can and developing high quality, functional software.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;