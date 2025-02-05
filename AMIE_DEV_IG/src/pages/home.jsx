// import components, variables, methods if you have modules with scripts (not needed but just in case)
import { Navbar } from "../components/navbar";
import { Link } from "react-router-dom";
import { Shapes } from "../components/homePage_shapes";
import { ScrollingImages } from "../components/scrolling_images";

export function Home({user}){

    // javescripts optional code here

    return(
        <>
        <div className="flex h-full flex-col md:flex-row justify-between p-5 w-full ">
            
        {/* Background Shapes */}
        <Shapes />

        {/* Sidebar */}
        <Navbar />

        {/* Main Content */}
        <div className="text-center ml-[15vw] flex flex-col justify-center p-10 w-full z-10">
            {/* Welcome Header */}
            <h1 className="text-6xl font-bold text-gray-900">Welcome, {user}</h1>

            {/* Motivational Phrase */}
            <h2 className="text-3xl font-semibold text-gray-700 mt-4">
            Your Health, Your Future
            </h2>

            {/* Paragraph Description */}
            <p className="text-lg text-gray-900 mt-4 max-w-2xl font-light">
            At Aggie Doc, we believe in providing personalized healthcare 
            solutions for every patient. Whether you need a specialist or 
            want to talk with our AI health assistant, we’re here for you.
            </p>

            {/* Buttons */}
            <div className="mt-3 p-5 flex justify-center gap-6">
                <Link to="/specialist">
                    <button className="bg-[#009CDE] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
                    Book a Specialist
                    </button>
                </Link>
                <Link to="/chatbot">
                    <button className="bg-gray-900 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition">
                        Talk to Specialist
                    </button>
                </Link>
            </div>
        </div>

        {/* Right Side: Scrolling images */}
        <div className="hidden md:flex items-center w-1/2 overflow-hidden relative z-10">
            <ScrollingImages />
        </div>

        </div>
        </>
    )
}