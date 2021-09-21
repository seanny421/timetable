import React, {useState, useEffect} from "react";

export default function DayDisplay(){
    const [date, setDate] = useState("");
    useEffect(() => {

        var today = new Date();
        var month = today.toLocaleString('default', {month: 'short'});
        var day = today.toLocaleString('default', {weekday: 'long'});
        var dd = String(today.getDate());
        setDate(day + " " + month + " " + dd);
    }, [])



    return (
        /* Could add md:items end mr-20 if you want aligned right on larger screens */
        <section id="day-display" className="flex flex-col items-center p-4">
            <div className="flex flex-row gap-2 items-end mt-8">
                <h1 className="text-5xl lg:text-7xl">{date} </h1>
                <h3 className="opacity-40 text-2xl lg:text-3xl"> Today</h3>
            </div>
        </section>

    );

}
