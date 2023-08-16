import React from "react";
import quiz from "../imgs/quiz.png"
import generator from "../imgs/generator.png"
import pokedex from "../imgs/pokedex.png"
import schedule from "../imgs/schedule.png"

export default function Projects() {
  return (
    <div className="flex flex-row justify-center content-center space-x-5 grid grid-rows-2 grid-flow-col gap-4">
      
      <a href="https://will-rd.github.io/Quiz-Game/" className=" col-span-2 bg-center h-96 w-96" style={{backgroundImage: `url(${quiz})`}}>
      </a>
      <a href="https://will-rd.github.io/Pokedex-App/" className=" col-span-2 bg-center h-96 w-96" style={{backgroundImage: `url(${pokedex})`}}>
        
      </a>
      <a href="https://will-rd.github.io/Password-Generator/" className=" col-span-2 bg-center h-96 w-96" style={{backgroundImage: `url(${generator})`}}>
        
      </a>
      <a href="https://will-rd.github.io/WorkDay-Scheduler/" className=" col-span-2 bg-center h-96 w-96" style={{backgroundImage: `url(${schedule})`}}>
        
      </a>


    </div>
  );
}