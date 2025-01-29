import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FaRegAddressBook } from "react-icons/fa";
import { TbMoodSick } from "react-icons/tb";
import { IoChatboxOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";

/*


    Here I have created a navbar component, before you start heavily developing 
    your components, make sure you have inserted this component into your page,
    when finished with your respective page, make sure you update the links array and change
    the route path to you pages path. if you need help I (Elias) will help

    how to insert component?? 
    <Component_name/>

    if theres props ??

    <Component_name  prop_name = {prop_here}  />  You can do more than one prop



*/

export function Navbar({user}){

    /*
    PLEASE INSTALL ALL THESE MODULES OR THIS WULL NOT RENDER
    *** you can copy and paste in your terminal ****
    npm install
    npm install firebase
    npm install react-icons
    npm install react-router-dom
    npm install tailwindcss @tailwindcss/vite

    To run server:
    Cd “project name”
        Npm run dev
    To end server:
        Ctrl + C

    */

    // navbar link objects
    const iconStyle = 'size-[25px]';
    const links = [
        {
            name: "Home",
            component: <IoMdHome className={iconStyle} />,
            path:'/'
        },
        {
            name: "Specialists",
            component: <FaUserDoctor className={iconStyle} />,
            path:'/'
        },
        {
            name: "Support",
            component: <IoChatboxOutline className={iconStyle} />,
            path:'/'
        },
        {
            name: "Symptoms",
            component: <TbMoodSick className={iconStyle} />,
            path:'/'
        },
        {
            name: "Appointments",
            component: <FaRegAddressBook className={iconStyle} />,
            path:'/'
        },
        {
            name: "Account",
            component: <VscAccount className={iconStyle} />,
            path:'/'
        },

    ]

    // constant colors
    const blue = '#009CDE'
    const black = '#000000'
    const white = 'white'


    // retun component
    return(
        <div className=" fixed w-[15vw] md:w-[15vw] h-full border-r-2 border-black flex flex-col">
            <div className="w-full h-[70px] border-0 border-black flex justify-center items-center bg-[#009CDE] text-white ">
                <h3 className=" text-[25px] font-bold ">Aggie Doc</h3>
            </div>
            <div className="w-full h-[70%] border-0 border-black flex flex-col 
            justify-start gap-[0px] items-start  pt-[50px]">
                {
                    links.map(i=>{
                        return <div className="flex gap-[15px] items-center
                                 duration-[.2s]  w-full h-[13%] pl-[25px] hover:bg-[#009CDE]  hover:text-white ">
                            {i.component}
                            <a href="" className="text-[17px]">
                                {i.name}
                            </a>
                        </div>
                    })
                }
            </div>
            <div className="w-full h-[20%] border-0 border-black flex flex-col 
            justify-center items-center">
                <a href="" className="text-[18px] border-2 rounded-[20px] p-[10px] 
                w-[70%] text-center hover:bg-[#009CDE]  hover:text-white duration-[.2s]">
                    Log out
                </a>
            </div>

        </div>
    )


}