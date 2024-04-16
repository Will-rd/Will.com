import React from "react";
import { useState } from "react"
import Hamburger from "../Hamburger"

export default function Nav({ currentPage, handlePageChange }) {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className="w-screen" >
            <div className="navigation">
                <ul className="">
                    <li className="m-2">
                        <a
                            href="#home"
                            onClick={() => handlePageChange('Home')}
                            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                            Home
                        </a>

                    </li>
                    <li className="m-2">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                            About Me</a></li>
                            <li className="m-2">
                        <a
                            href="#about"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact</a></li>
                    <li className="m-2">
                        <a
                            href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </a>

                    </li>


                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen} />
                </div>
            </div>


            <style>{`
                .navigation {
                    width: 100%;
                    height: 50px;
                    --tw-bg-opacity: 1;
                    background-color: rgb(75 85 99 / var(--tw-bg-opacity));
                    color: lemonchiffon;
                }
                
                .navigation ul {
                    display: flex;
                    flex-wrap: wrap;
                    float: right;
                    margin: 20 0px;
                    padding: 0 25px;
                }
                
                .navigation ul li {
                    list-style-type: none;
                    padding-right: 10px;
                }

                @media (max-width: 768px){

                    .navigation ul {
                        display: ${hamburgerOpen ? 'inline' : 'none'};
                        --tw-bg-opacity: 1;
                        background-color: rgb(75 85 99 / var(--tw-bg-opacity));
                        color: lemonchiffon;
                        height 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: absolute;
                        border: solid lemonchiffon;
                        border-width: 2px;
                    }
                }

                
            `}</style>
        </div>
    )
}