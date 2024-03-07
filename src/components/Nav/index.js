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
                    <li className="mt-2">Home</li>
                    <li className="mt-2">About</li>
                    <li className="mt-2">Contact Me</li>
                    <li className="mt-2">Projects</li>


                </ul>
                <div className="hamburger" onClick={toggleHamburger}>
                    <Hamburger isOpen={hamburgerOpen}/>
                </div>
            </div>


            <style jsx>{`
                .navigation {
                    width: 100%;
                    height: 50px;
                    background-color: lemonchiffon;
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
                        background-color: lemonchiffon;
                        height 100vh;
                        width: 50vw;
                        margin-top: 50px;
                        position: absolute;
                    }
                }

                
            `}</style>
        </div>
    )
}