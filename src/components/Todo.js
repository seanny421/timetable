import React, { useState } from "react";

function Todo({todos, setTodos, todoText, todo, today}){
    const [isDeleted, setIsDeleted] = useState(false);
    const [isNextDay, setIsNextDay] = useState(false);

    function deleteHandler(e){
        setIsDeleted(true);
        //use setTimeout so use can see the animation when fall class is added 
        setTimeout(() => {setTodos(todos.filter(element => element.id !== todo.id));}, 500);
    };
    
    function completedHandler(){
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return{
                    ...item, completed: !item.completed
                }
            }
            return item;
        }))
    };

    function getDay(todoDay){
        switch(todoDay){
          case "Monday":
              return "Sunday"
          case "Sunday":
              return "Monday"
          case "Monday":
              return "Tuesday"
          case "Tuesday":
              return "Wednesday"
          case "Wednesday":
              return "Thursday"
          case "Thursday":
              return "Friday"
          case "Friday":
              return "Saturday"
        }
        
      }

    function nextDayHandler(){
        setIsNextDay(true)
        //set this todo.day to the next day
        setTimeout(() => {
            setTodos(todos.map((item) => {
                if(item.id === todo.id){
                    return{
                        ...item, day: getDay(item.day)
                    }
                }
                return item;
            }))
        }, 500);
    }

    return(
        <div className={`todo ${isDeleted ? "fall": ""} ${todo.completed ? "completed": ""} ${isNextDay ? "slide": ""}`}>
            <li className={`todo-item`}>{todoText}</li>
            <button onClick={completedHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={nextDayHandler} className={'move-day-btn'}>
                <i className="fas fa-arrow-right"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};



export default Todo;