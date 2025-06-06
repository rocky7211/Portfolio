import React from "react";

const Projects = () => {

    // move API implementation to seperate module later
    const [input, setInput] = React.useState("");
    const [selectedMethod, setSelectedMethod] = React.useState('');
    const [response, setResponse] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleInputChange = (e) => { setInput(e.target.value); };

    const handleMethodChange = (e) => { setSelectedMethod(e.target.value); };

    const sortedResponse = Array.isArray(response) ? response.sort((a, b) => a.count - b.count) : response;

    const handleButtonClick = async () => {
        setLoading(true);
        if (selectedMethod === 'get_all_skills') {
            await get_all_skills();
        } else if (selectedMethod === 'get_skill') {
            await get_skill();
        } else if (selectedMethod === 'add_skill') {
            await add_skill();
        } else if (selectedMethod === 'decrement_skill') {
            await decrement_skill();
        } else if (selectedMethod === 'remove_skill') {
            await remove_skill();
        }
        setLoading(false);
    };

    const handleResetButtonClick = () => {
        setInput("");
        setSelectedMethod("");
        setResponse("");
    };

    const get_all_skills = async () => {
        try {
            const res = await fetch("https://api.jaredmcdowall.me/skills/get_all_skills", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
        }

    };

    const get_skill = async () => {
        try {
            const res = await fetch(`https://api.jaredmcdowall.me/skills/get_skill?skill_name=${encodeURIComponent(input)}`, {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            const data = await res.json();
            setResponse(data);
        } catch (err) {
            console.error(err);
        }
    };

    const add_skill = async () => {
        try {
            const res = await fetch("https://api.jaredmcdowall.me/skills/add_skill", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ skill_name: input })
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (err) {
            console.error(err);
        }
    }

    const decrement_skill = async () => {
        try {
            const res = await fetch("https://api.jaredmcdowall.me/skills/decrement_skill", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ skill_name: input })
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (err) {
            console.error(err);
        }
    }

    const remove_skill = async () => {
        try {
            const res = await fetch("https://api.jaredmcdowall.me/skills/remove_skill", {
                method: "DELETE",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ skill_name: input })
            });
            const data = await res.json();
            setResponse(data.response);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div name='projects' className="w-full min-h-screen text-white bg-[#08314A]">
            <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
                <div className="pb-8 pt-20">
                    <p className="text-4xl font-bold inline border-b-4 text-white border-[#FD00E3]">Projects</p>
                    <p className="py-6">I enjoy developing new skills and refining current ones through personal projects.
                        Over the years, I have developed a few different projects and continue challenging myself.
                        Below, I have included my Developer Skills API, built with Python using the Flask library. I started this as a way to keep track of all the
                        different skills employers sought. Check it out below! If you would like to see more, please visit my GitHub page.
                    </p>
                </div>

                {/* Container */}
                <div className="grid sm:grid-cols-1 md:grid-col-3 gap-4 ">

                    {/* Grid Item */}
                    <div 
                    className="shadow-lg shadow-[#040c16] group container rounded-md flex flex-col justify-center items-center"
                     style={{ background: 'linear-gradient(to bottom right, #FD00E3, #0C7DCB, #03F8FF)' }}>
                        <div className="my-8">
                                <h2 className="text-2xl font-bold">Developer Skills API</h2>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <select
                                        className="p-2 border border-[#FD00E3] rounded-md w-full md:w-1/2 text-black"
                                        onChange={handleMethodChange}
                                        value={selectedMethod}
                                    >
                                        <option value="">Select Method</option>
                                        <option value="get_all_skills">Get All Skills</option>
                                        <option value="get_skill">Get Skill</option>
                                        <option value="add_skill">Add Skill</option>
                                        <option value="decrement_skill">Decrement Skill</option>
                                        <option value="remove_skill">Remove Skill</option>
                                    </select>
                                    <input
                                        type="text"
                                        placeholder="Enter skill"
                                        className="p-2 border border-[#FD00E3] rounded-md w-full md:w-1/2 text-black"
                                        onChange={handleInputChange}
                                    />
                                    <button
                                        className="p-2 bg-[#FD00E3] rounded-md md:w-1/5"
                                        onClick={handleButtonClick}
                                    >
                                        Submit
                                    </button>
                                    <button
                                        className="p-2 bg-[#FD00E3] rounded-md md:w-1/5"
                                        onClick={handleResetButtonClick}
                                    >
                                        Reset
                                    </button>
                                </div>
                                {loading && (
                                    <div className="mt-4 p-4 text-white rounded-md w-full">
                                        <div className="loader"></div>
                                    </div>
                                )}
                                {response && (
                                    <div className="mt-4 p-4 text-white rounded-md w-full">
                                        {Array.isArray(sortedResponse) ? (
                                            sortedResponse.map((skill, index) => (
                                                <div key={index}>
                                                    <p><b>Skill: </b>{skill.name}. <b>Count: </b>{skill.count}</p>
                                                </div>
                                            ))
                                            ) : (<pre>{JSON.stringify(response, null, 2)}</pre>)
                                        }
                                    </div>
                                )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;