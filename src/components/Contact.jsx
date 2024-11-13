import React from "react";

const Contact = () => {
    const [formData, setFormData] = React.useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalMessage, setModalMessage] = React.useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch("https://getform.io/f/40272515-b19c-463c-9776-22431545874c", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                setModalMessage("Your message has been sent successfully.");
            } else {
                setModalMessage("An error occurred. Please try again later.");
            }
        } catch (error) {
            setModalMessage("An error occurred. Please try again later.");
        }
        setLoading(false);
        setModalVisible(true);
    }

    const closeModal = () => {
        setModalVisible(false);
        setFormData({ name: "", email: "", message: "" });
    }

    return (
        <div name="contact" className="w-full min-h-screen bg-[#08314A] flex justify-center items-center p-4 text-white pt-20">
            <form onSubmit={handleSubmit} action="https://getform.io/f/40272515-b19c-463c-9776-22431545874c" className="flex flex-col max-w-[600px] w-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-[#FD00E3]">Contact</p>
                    <p className="py-4">If you would like to contact me, please fill out the form below.</p>
                </div>
                <input className="bg-[#ffffff] p-2 text-black" type="text" placeholder="Name" name="name" value={formData.name} onChange={handleChange}/>
                <input className="my-4 p-2 bg-[#ffffff] text-black" type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                <textarea className="bg-[#ffffff] p-2 text-black" name="message" rows="10" placeholder="Message" value={formData.message} onChange={handleChange}></textarea>
                <button className="text-white border-2 hover:bg-[#FD00E3] hover:border-[#FFFF] px-4 py-3 my-8 mx-auto flex items-center" type="sumbit">
                    {loading ? 'Submitting...' : 'Submit'}
                </button>
            </form>
            {modalVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-[#08314A] p-4 rounded-lg">
                        <p>{modalMessage}</p>
                        <button onClick={closeModal} className="text-white bg-[#FD00E3] px-4 py-2 mt-4 rounded-lg">Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
