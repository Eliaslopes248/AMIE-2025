import { useState, useEffect, useRef } from 'react';
import { Navbar } from '../components/navbar';
import { VscAccount } from "react-icons/vsc";
// will need to make a script to pull dorthy from database
// import {getFirestore} on main project FYI

/*
    you can remove all the
    simulation data if you want of course,
*/

//use the following prompt in the demo: "What should I do in the meantime while I wait to see the doctor about my symptoms?"

export function Support({ user }) {
    const [messages, setMessages] = useState([]); // State to store chat messages
    const [input, setInput] = useState(''); // State to store user input
    const messagesEndRef = useRef(null); // Ref to scroll to the bottom of the messages

    // Fake user data for demonstration purposes
    const fakeUser = {
        name: 'Dorothy',
        symptoms: ['cough', 'fever', 'headache'],
    };

    // Function to handle sending a message
    const handleSend = async () => {
        if (input.trim() === '') return; // Prevent sending empty messages

        const newMessage = { text: input, sender: 'user' }; // Create a new user message
        setMessages([...messages, newMessage]); // Add the user message to the state

        // Simulate fetching data from a chatbot API with a delay
        setTimeout(async () => {
            const response = await fetchChatbotResponse(input); // Get the chatbot response
            setMessages(prevMessages => [...prevMessages, { text: response, sender: 'bot' }]); // Add the bot response to the state
        }, 500);

        setInput(''); // Clear the input field
    };

    // Function to simulate fetching a chatbot response
    //use the following prompt in the demo: "What should I do in the meantime while I wait to see the doctor about my symptoms?"
    const fetchChatbotResponse = async (input) => {
        // Hardcoded response
        const response = "1. **Stay Hydrated**: Drink plenty of water; avoid sugary or caffeinated drinks.\n\n2. **Monitor Blood Sugar**: If you can, check your blood sugar levels.\n\n3. **Eat Healthily**: Focus on a balanced diet low in sugar.\n\n4. **Manage Stress**: Practice stress-reducing activities like meditation.\n\n5. **Exercise Moderately**: Engage in light physical activity but avoid overexertion.\n\n6. **Care for Hands and Feet**: Protect them and check for any unnoticed injuries.\n\n7. **Track Symptoms**: Keep a record of your symptoms for your doctor.\n\n8. **Seek Help if Necessary**: If symptoms worsen, seek immediate medical attention.\n\nThese steps are general and should not replace professional medical advice. See a healthcare provider as soon as you can.";

        return response;
    };

    // Function to handle the Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    // Scroll to the bottom of the messages when a new message is added
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <>
            {/* Navbar component */}
            <Navbar user={user} />
            
            {/* Header section */}
            <div className="w-[80vw] h-[7vh] shadow-md shadow-gray-400 translate-x-[17vw] 
            translate-y-[2vh] flex items-center pl-[15px] bg-[#009CDE] border-2">
                <p className='text-2xl text-white'>
                    AI Chat Support
                </p>

                <div className="ml-auto mr-[2vw] flex gap-[15px] items-center text-white">
                    <VscAccount className='size-[35px]'/>
                    <p className='text-[20px]'>
                        {user ? user.username : "User"}
                    </p>
                </div>
            </div>

            {/* Main chat container */}
            <div className="w-[80vw] h-[88vh] border-black translate-x-[17vw] 
            translate-y-[3.5vh] shadow-md shadow-gray-400 flex flex-col 
            items-center overflow-hidden pt-[50px] gap-[20px] border-2">
                {messages.length === 0 ? (
                    // Welcome message when there are no messages
                    <div className="flex flex-col items-center justify-center size-full gap-[15px]">
                        <h1 className='text-7xl'>
                            Welcome, {user ? user.username : "user"}
                        </h1>
                        <p className='text-gray-400'>
                            I'm your new assistant, use me to help answer 
                            any medical questions you may have...
                        </p>
                    </div>
                ) : (
                    // Messages container
                    <div className="w-[50vw] h-[60vh] border-0 overflow-y-scroll">
                        {messages.map((message, index) => (
                            <div key={index} className={`message ${message.sender === 'user' ? 'user-message' : 'bot-message'}`}>
                                {message.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>
                )}
                {/* Input container */}
                <div className={`w-[50vw] ${messages.length == 0? "translate-y-[-15vh]":"translate-y-[0vh"} duration-[.3s] flex flex-col gap-[20px]`}>
                    <input 
                        type="text" 
                        placeholder='Enter medical question...'
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className='w-full p-[18px] border-2 bg-gray-100 rounded-2xl'
                    />
                    <button 
                        type="submit" 
                        onClick={handleSend}
                        className='p-[10px] w-[120px] border-2 rounded-[10px] bg-black
                        text-white hover:bg-white hover:text-black hover:translate-y-[-.5vh] duration-[.2s]'>
                        Send
                    </button>
                </div>
            </div>
            <style jsx>{`
                .user-message {
                    background-color: #009CDE;
                    color: white;
                    align-self: flex-end;
                    padding: 10px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    margin-left: auto;
                    margin-right: 2vw;
                    max-width: 300px;
                    width: fit-content;
                    text-align: left;
                    opacity: 0;
                    animation: fadeIn 0.5s ease-in forwards;
                }
                .bot-message {
                    background-color: gray;
                    color: white;
                    align-self: flex-start;
                    padding: 10px;
                    border-radius: 10px;
                    margin-bottom: 10px;
                    max-width: 300px;
                    width: fit-content;
                    text-align: left;
                    opacity: 0;
                    animation: fadeIn 0.5s ease-in 0.5s forwards;
                }
                @keyframes fadeIn {
                    to {
                        opacity: 1;
                    }
                }
            `}</style>
        </>
    );
}