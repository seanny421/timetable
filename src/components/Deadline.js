import React, { useState } from "react";


function Deadline({deadlines, setDeadlines, deadlineText, deadline}){
    const [isCompleted, setIsCompleted] = useState(false)

    function deadlineCompletedHandler(){
        setIsCompleted(true);
        setTimeout(() => {setDeadlines(deadlines.filter(element => element.id !== deadline.id));}, 500);

    }

    return (
        <div className={`deadline ${isCompleted ? "slide": ""}`}>
            <li className="deadline-title">{deadlineText}</li>
            <li className="deadline-date">For {deadline.date}</li>
            <li className="deadline-complete">
                <button onClick={deadlineCompletedHandler} className="complete-btn-deadline keep-right">
                    <i className="fas fa-check"></i>
                </button>
            </li>
            

        </div>
    );
}


export default Deadline;