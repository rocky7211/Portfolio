import React from "react";

const Contact = () => {
    return (
        <div name="contact" className="w-full h-screen bg-[#08314A] flex justify-center items-center p-4 text-white">
            <form method="POST" action="https://getform.io/f/40272515-b19c-463c-9776-22431545874c" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#FD00E3]">Contact</p>
                    <p className="py-4">If you would like to contact me, please fill out the form below.</p>
                </div>
                <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
                <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder="Message"></textarea>
                <button className="text-white border-2 hover:bg-[#FD00E3] hover:border-[#FFFF] px-4 py-3 my-8 mx-auto flex items-center">Submit</button>
            </form>
        </div>
    );
};

export default Contact;