import React from "react";
import Deadline from "./Deadline";

function DealineList({deadlines, setDeadlines}){

    return(
        <div className="deadline-container">
            <ul className="deadline-list">
                {deadlines.map((deadline) => (
                    <Deadline
                    key={deadline.id}
                    deadlineText={deadline.text}
                    deadlines={deadlines}
                    setDeadlines={setDeadlines}
                    deadline={deadline}
                    />
                ))}
                
            </ul>

        </div>
    )

}

export default DealineList;