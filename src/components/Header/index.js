import React from "react";

export default function Navbar({ currentPage, handlePageChange }) {
    return(
        <nav className="text-white border-gray-200 bg-gray-900 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
          <a href="#home" className="flex items-center bg-gray-900 ">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2ZA8PT8tsTZkTHOtMPWUA9IZD9ukRM1gSw&usqp=CAU" className="h-8 mr-3 bg-gray-900 rounded-full" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap ">Will Putnam</span>
          </a>
          <div className="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a href="#home" onClick={() => handlePageChange('Home')} className={`${currentPage === "Home"}block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 :text-white md:text-blue-500 `} >Home</a>
              </li>
              <li>
                <a href="#about" onClick={() => handlePageChange('About')} className={`${currentPage === "About"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}>About Me</a>
              </li>
              <li>
              <a href="#projects" onClick={() => handlePageChange('Projects')} className={`${currentPage === "Projects"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}>Projects</a>
              </li>
              <li>
              <a href="#funsies" onClick={() => handlePageChange('Funsies')} className={`${currentPage === "Funsies"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}>Funsies</a>
              </li>
              <li>
              <a href="#contact" onClick={() => handlePageChange('Contact')} className={`${currentPage === "Contact"} block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent`}>Contact Me</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
}