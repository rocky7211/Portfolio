import React from "react";

const About = () => {
    return (
        <div name='about' className="w-full h-screen bg-[#08314A] text-white">
            <div className="flex flex-col justify-center items-center w-full h-full">
                <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                    <div className="sm:text-right pb-8 pl-4">
                        <p className="text-4xl font-bold inline border-b-4 border-[#FD00E3]">About</p>
                    </div>
                    <div></div>
                    </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font-bold">
                        <p>Welcome to my portfolio.</p>
                    </div>
                    <div>
                        <p> I am a graduate of the University of Auckland, with a Bachelor of Science majoring in Computer Science. 
                            My passions lie in all things techonology specifically development and security.
                            I'm always looking to learn new things, and I'm currently working on a few projects to expand my skillset.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
