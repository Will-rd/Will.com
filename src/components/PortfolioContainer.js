import React, { useState } from "react";
import Navbar from "./Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Funsies from "./pages/Funsies";
import Projects from "./pages/Projects";

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
        <div className="bg-slate-300">
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}