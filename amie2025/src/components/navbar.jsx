import { IoMdHome } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { FaRegAddressBook } from "react-icons/fa";
import { TbMoodSick } from "react-icons/tb";
import { IoChatboxOutline } from "react-icons/io5";
import { FaUserDoctor } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { Support } from "../pages/support";
import { Appointments } from "../pages/appointments";

export function Navbar({ user }) {
  const iconStyle = 'size-[25px]';
  const links = [
    {
      name: "Home",
      component: <IoMdHome className={iconStyle} />,
      path: '/'
    },
    {
      name: "Specialists",
      component: <FaUserDoctor className={iconStyle} />,
      path: '/'
    },
    {
      name: "Support",
      component: <IoChatboxOutline className={iconStyle} />,
      path: '/support',
      route: <Support />
    },
    {
      name: "Appointments",
      component: <FaRegAddressBook className={iconStyle} />,
      path: '/appointments',
      route: <Appointments />
    },
    {
      name: "Account",
      component: <VscAccount className={iconStyle} />,
      path: '/profile'
    },
  ];

  const blue = '#009CDE';
  const black = '#000000';
  const white = 'white';

  return (
    <div className="top-0 left-0 fixed w-[15vw] md:w-[15vw] h-full border-r-2 border-black flex flex-col">
      <div className="w-full h-[70px] border-0 border-black flex justify-center items-center bg-[#009CDE] text-white ">
        <h3 className=" text-[25px] font-bold ">Aggie Doc</h3>
      </div>
      <div className="w-full h-[70%] border-0 border-black flex flex-col 
            justify-start gap-[0px] items-start  pt-[50px]">
        {
          links.map((i, index) => (
            <div key={index} className="flex gap-[15px] items-center
                                 duration-[.2s]  w-full h-[13%] pl-[25px] hover:bg-[#009CDE]  hover:text-white ">
              {i.component}
              <a href={i.path} className="text-[17px]">
                {i.name}
              </a>
            </div>
          ))
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
  );
}