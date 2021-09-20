import React from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCalendar} from '@fortawesome/free-solid-svg-icons'


export default function Menu({showMenu, dateToday}){
    
    return(
    //may need to add x outside section, therefor need another div
        
        <section id="menu" className={`w-full h-full p-4 text-right z-10 text-5xl lg:text-8xl flex items-center transition ease-in-out duration-500 ${showMenu ? "" : "transform -translate-x-full"}`}>
            <div className="flex flex-col ml-8 justify-start gap-10 lg:gap-40" >
                <div className="flex flex-row justify-start gap-4">

                    <FontAwesomeIcon icon={faCalendar} className="lg:text-9xl" ></FontAwesomeIcon>
                    <h2 className="absolute left-3 ml-14 mt-14 text-6xl text-white">{dateToday}</h2>
                    <h2>Today</h2>
                </div>
                <div className="flex flex-row justify-start gap-4">

                    <FontAwesomeIcon icon={faCalendar} className="lg:text-9xl"/>
                    <h2>Upcoming</h2>
                </div>
                <div className="flex flex-row justify-start gap-4">

                    <FontAwesomeIcon icon={faCalendar} className=""/>
                    <h2>Notes</h2>
                </div>
                
            </div>
        </section>
    );
}
