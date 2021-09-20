import React, {useState, useEffect} from "react";
import {faCheck} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons'
import axios from "axios";




export default function Todo({todoId, todoText, isMobile, todoCompleted, updatedAt}){
    const [completed, setCompleted] = useState(todoCompleted);
    const [slide, setSlide] = useState(false);
    const [deleted, setDeleted] = useState(false);
    
    function deleteTodo(){
        axios.delete('http://localhost:5000/todos/delete/' + todoId)
            .then(res => console.log(res.data));
        setSlide(true);
        setTimeout(() => {setDeleted(true); }, 800 );
    }

    useEffect(() => {
        //check if todo is completed, if it is and it has been 24hrs, delete from db
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        if(updatedAt.slice(0, 13) === yesterday.toISOString().slice(0, 13) && todoCompleted === true){
            deleteTodo(); 
        }


    });
    

    function toggleCompleted(){
        if(!completed){
            axios.post('http://localhost:5000/todos/complete/' + todoId)
                .then(res => console.log(res.data));
        }
        else {
            axios.post('http://localhost:5000/todos/incomplete/' + todoId)
                .then(res => console.log(res.data));
        }
        
        setCompleted(!completed);
        
    }

    return(
        <div>
            {!deleted && 
        <section id="todo" className={`max-w-95 mx-auto transition duration-500 ease-in-out lg:max-w-60 ${slide ? "opacity-0 transform translate-x-full " : ""} ${completed && !slide ? " transform opacity-70" : ""}`} >
            
            
            <div className="flex flex-row items-center justify-between">
                <div className="m-4  w-7/12  text-left ">
                    <div className="flex gap-2 items-end">
                        <h2 className="text-2xl lg:text-4xl">{todoText}</h2>
                        {!isMobile && 
                                <h3 className="opacity-70 text-2xl">Description</h3>
                        }
                    </div>

                </div>
                {/* <div className=" m-4  flex flex-col items-end  w-1/3 rounded "> */}
                <div className="flex flex-col items-end ">

                    <div className="self-end flex flex-row gap-2">
                        <button onClick={toggleCompleted} className={`transition duration-500 ease-in-out rounded-full flex-justify-center items-center border ${!completed ?  'border-red-600' : 'border-none bg-green-800'} w-8 h-8 flex justify-end lg:w-11 lg:h-11`}>
                            {completed &&
                                    <FontAwesomeIcon icon={faCheck} className="text-white text-2xl mx-auto"/>
                            }
                        </button>

                        <button onClick={deleteTodo}> 
                            <FontAwesomeIcon icon={faTrashAlt}/>
                        </button>
                    </div>
                </div>
            </div>
            <span className="bg-main-black shadow-md w-full h-px inline-block"></span>
        </section>
        }
        </div>
    );

}
