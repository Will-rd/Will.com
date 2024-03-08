import { useState } from "react"
import Hamburger from "../Hamburger"

export default function Nav() {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div>
            <div className="navigation">
                <ul className="">
                    <li className="m-2">Home</li>
                    <li className="m-2">About</li>
                    <li className="m-2">Contact Me</li>
                    <li className="m-2">Projects</li>


                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>


            <style jsx>{`
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
                        width: 25vw;
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