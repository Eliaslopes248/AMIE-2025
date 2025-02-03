import { Navbar } from "./components/navbar"
import { VscAccount } from "react-icons/vsc";
import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";


export function Appointments({user}){


    // apponitments stored in array of document objects


    // test data here
    // ******* minimized data ********
     // constant colors
    const blue = '#009CDE'
    const black = '#000000'
    const white = 'white'

    // appointment iterator
    let appCount = 0;

    const [appointments, setAppointments] = useState([
        {
          appointmentId: "APT001",
          userId: "USR101",
          doctorId: "DOC201",
          date: "2025-02-15",
          time: "10:30 AM",
          type: "General Checkup",
          status: "Confirmed"
        },
        {
          appointmentId: "APT002",
          userId: "USR102",
          doctorId: "DOC202",
          date: "2025-02-16",
          time: "2:00 PM",
          type: "Dental Cleaning",
          status: "Pending"
        },
        {
          appointmentId: "APT003",
          userId: "USR103",
          doctorId: "DOC203",
          date: "2025-02-17",
          time: "1:00 PM",
          type: "Eye Examination",
          status: "Confirmed"
        },
        {
          appointmentId: "APT004",
          userId: "USR104",
          doctorId: "DOC204",
          date: "2025-02-18",
          time: "3:30 PM",
          type: "Physical Therapy",
          status: "Cancelled"
        },
        {
          appointmentId: "APT005",
          userId: "USR105",
          doctorId: "DOC205",
          date: "2025-02-19",
          time: "9:00 AM",
          type: "General Checkup",
          status: "Confirmed"
        },
        {
          appointmentId: "APT006",
          userId: "USR106",
          doctorId: "DOC206",
          date: "2025-02-20",
          time: "11:15 AM",
          type: "Vaccination",
          status: "Completed"
        },
        {
          appointmentId: "APT007",
          userId: "USR107",
          doctorId: "DOC207",
          date: "2025-02-21",
          time: "4:45 PM",
          type: "Dermatology Consultation",
          status: "Confirmed"
        },
        {
          appointmentId: "APT008",
          userId: "USR108",
          doctorId: "DOC208",
          date: "2025-02-22",
          time: "12:30 PM",
          type: "Cardiology Consultation",
          status: "Pending"
        },
        {
          appointmentId: "APT009",
          userId: "USR109",
          doctorId: "DOC209",
          date: "2025-02-23",
          time: "2:45 PM",
          type: "ENT Consultation",
          status: "Cancelled"
        },
        {
          appointmentId: "APT010",
          userId: "USR110",
          doctorId: "DOC210",
          date: "2025-02-24",
          time: "10:00 AM",
          type: "Orthopedic Checkup",
          status: "Completed"
        }
      ])

    const appointment = []

    // testing deleting method
    const deleteAppointment = (index) => {
        const newAppointments = [...appointments];
        newAppointments.splice(index, 1);
        setAppointments(newAppointments);
    };

    return(
        <>

            <style>
                {`
                input[type="date"]:hover::-webkit-calendar-picker-indicator {
                    filter: invert(29%) sepia(100%) saturate(7481%) hue-rotate(180deg) brightness(95%) contrast(101%);
                }

                input:focused{
                    outline: none;
                }
                `}
            </style>


            <Navbar/>

            {/* main container */}

            <div className="w-[80vw] h-[95vh] border-0 border-black translate-x-[17vw] translate-y-[2.5vh] 
            rounded-[30px] shadow-md shadow-gray-400 flex flex-col overflow-hidden ">



                   <div className=" w-full h-[15vh] bg-[#009CDE] flex flex-row items-center pl-[30px]">
                        <h1 className=" text-white text-[40px] ">
                            Appointments
                        </h1>

                        <div className="flex flex-row items-center text-white text-[40px] ml-auto mr-[4vw] gap-[15px] ">
                            <VscAccount/>
                            <p>
                                {user ? user.username : "User"}
                            </p>

                        </div>

                   </div>


                   <div className="border-0 flex gap-[20px] h-[10vh] items-center pl-[20px]">
                        <div className="flex gap-[20px] h-[10vh] items-center border-0">
                            <input type="date" name="" id="" className="border-2 border-black h-[50%] 
                            p-[10px] rounded-[10px] duration-[.2s] hover:border-[#009CDE] hover:text-[#009CDE]"/>
                            <p>To</p>
                            <input type="date" name="" id="" className="border-2 border-black h-[50%] 
                            p-[10px] rounded-[10px] duration-[.2s] hover:border-[#009CDE] hover:text-[#009CDE]"/>
                        </div>

                        <div className="w-[20vw] h-full border-0 ml-[2vw] flex items-center">
                            <select name="" id="" className="p-[10px] text-black border-2 border-black rounded-[10px]">
                                <option value="">Current</option>
                                <option value="">Past</option>
                                <option value="">All</option>
                            </select>

                        </div>

                        <div className="w-[10vw] h-full border-0 ml-auto mr-[2vw] flex justify-center items-center">
                            <a href={''} className="border-2 p-[10px] w-[60%] text-center rounded-[20px] bg-[#009CDE] text-white
                             hover:text-black hover:bg-white hover:border-black duration-[.2s]">
                                <button className="">
                                    Add
                                </button>
                            </a>
                        </div>


                   </div>


                   <div className="w-full h-[65vh] border-0 flex flex-col ">

                        <div className="w-full h-[7vh] p-[10px] bg-gray-200 flex  items-center">
                            <p className="  p-2 font-semibold text-center ml-[2vw]">Doctor</p>
                            <p className="  p-2 font-semibold text-center ml-[7.5vw]">Date & Time</p>
                            <p className="  p-2 font-semibold text-center ml-[11vw]">Type</p>
                            <p className="  p-2 font-semibold text-center ml-[14.4vw]">Status</p>

                        </div>

                        <div className="w-full h-[93%] border-0 flex flex-wrap  overflow-scroll ">

                            {   appointments.length > 0 ?
                                appointments.map((app, index) => {
                                    appCount++;
                                    return (
                                        <div key={app.appointmentId} className={`w-full h-[10vh] border-0 ${appCount % 2 === 0 ? 'bg-white' : 'bg-gray-100'} flex items-center pl-[15px]`}>
                                            <div className="ml-[2vw] border-0 w-[10%] h-full flex items-center">
                                                <p>{app.doctorId}</p>
                                            </div>
                                
                                            <div className="ml-[0vw] justify-center border-0 w-[20%] h-full flex items-center">
                                                <p>{app.date} at {app.time}</p>
                                            </div>
                                
                                            <div className="ml-[0vw] justify-center border-0 w-[20%] h-full flex items-center">
                                                <p>{app.type}</p>
                                            </div>
                                
                                            <div className="mr-[5vw] justify-center border-0 w-[20%] h-full flex items-center">
                                                <p>{app.status}</p>
                                            </div>
                                
                                            <FaRegTrashAlt
                                                className="size-[21px] text-gray-600 ml-auto mr-[2vw] hover:text-red-400 duration-[.1s]"
                                                onClick={() => deleteAppointment(index)}
                                            />
                                        </div>
                                    );
                                })

                                : 

                                // if no appointments set
                                <div className="size-full flex items-center justify-center">

                                    <p className="text-gray-400">
                                        No appointments. <span className="text-[#009CDE] hover:underline">Find specialist.</span>
                                    </p>


                                </div>
                            }

                        </div>

                       

                   </div>



            </div>
        
        
        
        </>
    )




}