import React from "react";
import { BiHome, BiCalendar, BiChat } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudent } from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="z-30">
      <header className="px-[6%] py-4 shadow-md flex items-center justify-between top-0 left-0 fixed w-full bg-white">
        <a href="" className="text-black nav-brand text-3xl md:text-[32px]">
          TEKAJE
        </a>

        <div className="md:flex hidden">
          <ul className="justify-between flex font-bold gap-4">
            <li>
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Schedule</a>
            </li>
            <li>
              <a href="">Teacher</a>
            </li>
            <li>
              <a href="">Students</a>
            </li>
          </ul>
        </div>
      </header>

      <nav className="fixed bottom-0 left-0 bg-white w-full rounded-t-3xl shadow-2xl">
        <div className="md:hidden flex w-full px-4 justify-center py-4">
          <ul className="justify-between flex font-bold gap-4 items-center px-3">
            <li>
              <a href="#home" className="items-center flex flex-col">
                <BiHome className="text-2xl" />
                <span className="text-sm">Home</span>
              </a>
            </li>
            <li>
              <a href="#schedule" className="items-center flex flex-col">
                <BiCalendar className="text-2xl" />
                <span className="text-sm">Schedule</span>
              </a>
            </li>
            <li>
              <a href="#teacher" className="items-center flex flex-col">
                <FaChalkboardTeacher className="text-2xl" />
                <span className="text-sm">Theacher</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex flex-col ">
                <PiStudent className="text-2xl" />
                <span className="text-sm">Students</span>
              </a>
            </li>
            <li>
              <a href="#" className="items-center flex flex-col ">
                <BiChat className="text-2xl" />
                <span className="text-sm">Contact</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
