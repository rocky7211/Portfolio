import React from "react";
import css from "../assets/css.png";
import rlang from "../assets/Rlang.png";
import html from "../assets/html.png";
import java from "../assets/java.png";
import react from "../assets/react.png";
import python from "../assets/python.png";


const Skills = () => {
    return (
        <div name="skills" className="w-full h-screen bg-[#192231] text-gray-300">
            {/* Container */}
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-[#46bcde] ">Skills</p>
                    <p className="py-4">These are the technologies that I have worked the most with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={html} alt="HTML icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={css} alt="CSS icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={rlang} alt="R icon" />
                        <p className="my-4">R</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={react} alt="React icon" />
                        <p className="my-4">REACT</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={python} alt="Python icon" />
                        <p className="my-4">PYTHON</p>
                    </div>
                    <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                        <img className="w-20 mx-auto" src={java} alt="Java icon" />
                        <p className="my-4">JAVA</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;