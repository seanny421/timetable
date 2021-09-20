import React, {useState} from "react";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faPlus} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";

function SearchBar(){
    const [todoText, setTodoText] = useState("");
    const [animation, setAnimation] = useState(false);

    function todoTextHandler(e){
        setTodoText(e.target.value);
    }

    function addTodo(e){
        //axios functions to add data to db
        const todo = {
            userID: '611e92451c49a231f80a5709',
            todoText: todoText
        }

        if(todoText !== ""){
            axios.post('http://localhost:5000/todos/add', todo)
                .then((res) => {
                    console.log(res);
                });

        }

    }

    return(
        <form onSubmit={addTodo}>
            <section id="searchbar">
                    <fieldset className="p-3 flex flex-row justify-center text-3xl">
                        <input onChange={todoTextHandler} type="text" className={`  rounded-l-lg flex shadow-lg pl-2 focus:outline-none lg:w-1/2`}/>
                    <button type="button" onClick={() => {setAnimation(true)}} onAnimationEnd={() => setAnimation(false)} className={`${animation && "animate-press"} rounded-r-lg bg-red-700 shadow-lg`}>
                        <FontAwesomeIcon icon={faPlus} className="text-white text-3xl m-2 md:text-4xl 2xl:text-5xl "/>
                    </button> 
                    </fieldset>
            </section>
        </form>
)


}



export default SearchBar;
