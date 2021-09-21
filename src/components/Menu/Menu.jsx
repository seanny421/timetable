import React, {useState} from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import {fasFileAlt} from '@fortawesome/free-regular-svg-icons'
import {BiNotepad, BiTimeFive} from 'react-icons/bi'
import {FcCalendar} from 'react-icons/fc'
import {CSSTransition} from 'react-transition-group'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Menu({showMenu, dateToShow}){
    const [showCalender, setShowCalender] = useState(false);
    const [inProp, setInProp] = useState(false);
    function toggleShowCalender(){
        setShowCalender(!showCalender);
        setInProp(!inProp);
    }

    function dateHandler(e){
        return null;
    }
    
    return(
    //may need to add x outside section, therefor need another div
       
        <section id="menu" className={`w-full h-full p-4 text-right z-10 text-5xl lg:text-8xl flex items-center transition ease-in-out duration-500 ${showMenu ? "" : "transform -translate-x-full"}`}>
            <div className="flex flex-col ml-8 justify-start gap-24 lg:gap-40" >
                <div className={`transition  ease-in-out duration-300 flex flex-row justify-start gap-4 ${showCalender ? "transform -translate-y-4" : ""}`}>

                    <button onClick={toggleShowCalender}>
                        <FcCalendar/>
                    </button>
                    <h2>Today</h2>
                </div>
                {showCalender &&
                <div className="flex flex-row justify-start gap-4">
                    {/* <input type="date" id="start" name="trip-start" */}
                    {/* value="2018-07-22" className={`transition delay-300 ease-in-out duration-700 ${showCalender ? "transform translate-y-4": "opacity-0"}`} */}
                    {/* min="2018-01-01" max="2018-12-31"/> */}
                    <DatePicker selected={dateToShow} onChange={dateHandler} className="max-w-xl"/>
                </div>
                }
                <div className="flex flex-row justify-start gap-4">
                    <BiTimeFive/>
                    <h2>Upcoming</h2>
                </div>
                <div className="flex flex-row justify-start gap-4">

                    <h2><BiNotepad className=""/></h2>
                    <h2>Notes</h2>
                </div>
                
            </div>
        </section>
    );
}
