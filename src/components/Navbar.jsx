import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import Logo from '../assets/jm-logo.svg';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [showArrow, setShowArrow] = useState(false);

    const handleClick = () => setNav(!nav);

    const handleScroll = () => {
        if (window.scrollY >= 200) {
            setShowArrow(true);
        } else {
            setShowArrow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll); }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#08314A] text-white">
        <div>
            <img src={Logo} alt="Logo" style={{width: '80px'}} /> { }
        </div>

        { /* Menu */ }
        <div>
            <ul className="navbar hidden md:flex">
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
            </ul>
        </div>

        { /* Hamburger */ }
            <div onClick={handleClick} className="hamburger-menu md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

        { /* Mobile menu */ }
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#192231] flex flex-col justify-center items-center'}>
                <ul>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500}>Skills</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="projects" smooth={true} duration={500}>Projects</Link>
                    </li>
                    <li className="py-6 text-4xl">
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>
                </ul>
            </div>

        { /* Social icons*/ }
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://www.linkedin.com/in/jared-mcdowall/">
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-gray-300"
                        href="https://github.com/rocky7211">
                            GitHub <FaGithub size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
            { /* Scroll to top */ }
            {showArrow && (
                <div onClick={scrollToTop} className="fixed bottom-4 right-4 bg-[#08314A] p-2 rounded-full cursor-pointer">
                    <FaArrowUp className="text-white" size={30}/>
                </div>
            )}
        </div>
    );
};

export default Navbar;