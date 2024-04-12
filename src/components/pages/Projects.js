import React from "react";
import quiz from "../imgs/quiz.png"
import generator from "../imgs/generator.png"
import pokedex from "../imgs/pokedex.png"
import schedule from "../imgs/schedule.png"
import forecast from "../imgs/4cast.png"
import newSpace from "../imgs/newSpace.png"

export default function Projects() {
  return (
    <div className="project-box w-screen bg-gray-600">
      <a href="https://thawing-hollows-46636-439c761978db.herokuapp.com/" className="project border-solid border-4 border-black  bg-cover" style={{backgroundImage: `url(${newSpace})`}}>
        <p className="bg-red-400 text-white m-2" >A MERN stack social media app.</p>
      </a>
      <a href="https://will-rd.github.io/Quiz-Game/" className="project border-solid border-4 border-black  bg-cover" style={{backgroundImage: `url(${quiz})`}}>
        <p className="bg-red-400 text-white m-2" >This is a quiz game written with basic JavaScript</p>
      </a>
      <a href="https://will-rd.github.io/Pokedex-App/" className="project border-solid border-4 border-black bg-cover" style={{backgroundImage: `url(${pokedex})`}}>
      <p className="bg-red-400 text-white m-2" >This is a pokedex app using the PokeAPI</p>
      </a>
      <a href="https://will-rd.github.io/Password-Generator/" className="project border-solid border-4 border-black bg-cover" style={{backgroundImage: `url(${generator})`}}>
      <p className="bg-red-400 text-white m-2" >This app generates a custom password for the user.</p>
      </a>
      <a href="https://will-rd.github.io/WorkDay-Scheduler/" className="project border-solid border-4 border-black bg-cover" style={{backgroundImage: `url(${schedule})`}}>
      <p className="bg-red-400 text-white m-2" >A simple app for scheduling a workday</p>
      </a>
      <a href="https://will-rd.github.io/weather-app/" className="project border-solid border-4 border-black bg-cover" style={{backgroundImage: `url(${forecast})`}}>
      <p className="bg-red-400 text-white m-2" >Five day weather forecast for any city using the open weather API</p>
      </a>


    </div>
  );
}