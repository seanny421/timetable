import React from "react";


export default function MenuButton( {showMenu, setShowMenu}){
    function toggleMenu(){
       setShowMenu(!showMenu); 
    }

    return(
        <div id="menu-button" className="absolute z-20 m-4">
            <div className="inline-block cursor-pointer" onClick={toggleMenu}>
                {/* <div className={`bar w-300p h-1 m-2 rounded transition ease-in-out duration-700 lg:w-400p  lg:py-1 ${showMenu ? "transform translate-y-300p lg:translate-y-300-p rotate-45  bg-main-black" : ""}`}></div> */}
                <div className={`bar w-300p h-1 m-2 rounded transition ease-in-out duration-700 lg:w-400p  lg:py-1 ${showMenu ? "transform -rotate-45 translate-y-6px translate-x-9-px lg:translate-y-200p bg-main-black" : ""}`}></div>
                <div className={`bar w-300p h-1.5 m-2 rounded transition ease-in-out duration-700 lg:w-400p lg:py-1 ${showMenu ? "opacity-0" : ""}`}></div>
                <div className={`bar w-300p h-1 m-2 rounded transition ease-in-out duration-700 lg:w-400p  lg:py-1 ${showMenu ? "transform rotate-45 translate-y-12-px translate-x-8-px lg:translate-y-200-p bg-main-black" : ""}`}></div>
                {/* <div className={`bar w-300p h-1 m-2 rounded transition ease-in-out duration-700 lg:w-400p lg:py-1 ${showMenu ? " transform -rotate-45 translate-y-300-p lg:translate-y-200-p bg-main-black" : ""}`}></div> */}
            </div>
        </div>
    );
}
