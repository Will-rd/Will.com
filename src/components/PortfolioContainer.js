
import React, { useState } from "react";
import Navbar from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Funsies from "./pages/Funsies";
import Projects from "./pages/Projects";

const bgImg = require("./imgs/newPower.png")

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');


    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />;
        }
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        if (currentPage === 'Funsies') {
            return <Funsies />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (

        <div className="aspect-auto h-screen w-auto flex items-center justify-center bg-gray-600">

            <div className="bg-contain bg-no-repeat bg-center w-11/12 h-5/6" style={{ backgroundImage: `url(${bgImg})` }}>
            </div>

        </div>
    );
}



//THIS IS THE NAVBAR! I am redesigning the layout so this will change eventually
// but it is functional!

// {/* <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//             {renderPage()} */}




// function recursiveRange(num){
//     let count = num;
//     if(count === 0) return 0;
//     return count + recursiveRange(num - 1);
//  }

//  <main className="box-border h-80 w-80 bg-orange-400 rounded-full ring-2 ring-grey-400 ring-inset shadow-lg shadow-cyan-500  flex items-center justify-center font-serif">
//                 <button className="hover:text-orange-400 active:text-orange-400 text-2xl font-bold tracking-wide text-sky-950" >willPower()</button>
//             </main>
