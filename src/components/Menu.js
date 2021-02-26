import React, { Component, useState } from "react";
import DeadlineEntry from "./DeadlineEntry";

function Menu( {menu, setMenu, deadlines, setDeadlines} ) {
    const [subnav, setSubnav] = useState(false);
    const [deadlineInput, setDeadlineInput] = useState("");
    function toggleMenu(){
        setMenu(!menu);
        setSubnav(false);
    }
   
    function toggleSubnav(){
        setSubnav(!subnav);
    }
    return(
        <div className="menu-container">
            <div onClick={toggleMenu} className={`hamburger-container ${menu ? "change" : ""}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div id="flyoutMenu" className={`${menu ? "show" : ""}`}>
                <h2><a href="./index.html" className="home">Home</a></h2>

                <div className="subnav">
                    <button onClick={toggleSubnav} className="subnavbtn"><h2>Deadlines <i className="fa fa-caret-right"></i></h2></button>
                    <div id="subnav-content" className={`${subnav ? "subnav-content-show" : ""}`}>
                        {/* <a href="#">Subnav</a> */}
                        <DeadlineEntry 
                        deadlines={deadlines}
                        setDeadlines={setDeadlines}
                        deadlineInput={deadlineInput}
                        setDeadlineInput={setDeadlineInput}
                        />
                    </div>
                </div>
                <h2><a href="#">Look At</a></h2>
                <h2><a href="./pom.html">Pomodoro</a></h2>
            </div>
        </div>
    );
};
export default Menu;