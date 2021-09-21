import React, {useState, useEffect} from "react";
import Todo from "./Todo.jsx";
import axios from "axios";

export default function OverdueList( {user, isMobile}){
    const [todoList, setTodoList] = useState([]);
    const [haveOverdue, setHaveOverdue] = useState(false);

    useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        console.log(yesterday.toISOString());

       axios.get('http://localhost:5000/todos/611e92451c49a231f80a5709') 
            .then(response => {
                setTodoList(response.data.reverse().filter(todo => todo.createdAt < yesterday.toISOString() && todo.todoCompleted === false));
            });
        
    }, []);    

    return(
        <div>
            <section id="todolist">
                {todoList.length > 0 &&

                    <h2 className="text-4xl md:text-6xl">Overdue</h2>
                }
                {todoList.map(todo => (
                    
                    <Todo key={todo._id} todoId={todo._id} updatedAt={todo.updatedAt} createdAt={todo.createdAt} todoText={todo.todoText} isMobile={isMobile} todoCompleted={todo.todoCompleted}/>
                ))}
            </section>
        </div>
    );

}



