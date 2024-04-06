import React from "react";
import quiz from "../imgs/quiz.png"
import generator from "../imgs/generator.png"
import pokedex from "../imgs/pokedex.png"
import schedule from "../imgs/schedule.png"

export default function Projects() {
  return (
    <div className="p-8 flex flex-row justify-center content-center space-x-5 items-center w-screen h-screen bg-gray-600">
      
      <a href="https://will-rd.github.io/Quiz-Game/" className="p-8 border-solid border-4 border-black  bg-center  h-96 w-96" style={{backgroundImage: `url(${quiz})`}}>
        
      </a>
      <a href="https://will-rd.github.io/Pokedex-App/" className="p-8 border-solid border-4 border-black  bg-cover bg-center h-96 w-96" style={{backgroundImage: `url(${pokedex})`}}>
        
      </a>
      <a href="https://will-rd.github.io/Password-Generator/" className="p-8 border-solid border-4 border-black  bg-cover bg-center h-96 w-96" style={{backgroundImage: `url(${generator})`}}>
        
      </a>
      <a href="https://will-rd.github.io/WorkDay-Scheduler/" className=" p-8 border-solid border-4 border-black bg-cover bg-center h-96 w-96" style={{backgroundImage: `url(${schedule})`}}>
        
      </a>


    </div>
  );
}