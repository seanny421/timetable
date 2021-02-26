import React, { useState } from "react";
var uniqid = require("uniqid");

function DeadlineEntry({deadlines, setDeadlines, deadlineInput, setDeadlineInput}){
    const [dateEntry, setDateEntry] = useState("");


    function submitDeadlineHandler(e){
        e.preventDefault();
        if(dateEntry !== ""){
            setDeadlines([
                ...deadlines, {text: deadlineInput, id: uniqid('deadline-id'), completed:false, date: dateEntry}
            ]);
            setDeadlineInput("");
        }

        
        
    };

    function deadlineInputHandler(e){
        setDeadlineInput(e.target.value);
    };

    function dateEntryHandler(e){
        setDateEntry(e.target.value);
    };

    return(
        <form className="deadline-form">
            <ul>
                <li>
                    <input value={deadlineInput} onChange={deadlineInputHandler} type="text" className="deadline-input"></input>
                    <button onClick={submitDeadlineHandler} className="deadline-button" type="subimt">
                        <i className="fas fa-plus-square"></i>
                    </button>
                </li>
                <li>
                    <input type="date" onChange={dateEntryHandler} className="deadline-date-input"></input>
                </li>
                
            </ul>
            {/* <input type="text" className="deadline-input"></input>
            <button className="deadline-button" type="subimt">
                <i className="fas fa-plus-square"></i>
            </button>
            <input type="date" className="deadline-date-input"></input> */}
            
        </form>
    );
}


export default DeadlineEntry