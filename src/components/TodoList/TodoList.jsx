import React, {useState, useEffect} from "react";
import Todo from "./Todo.jsx";
import axios from "axios";

export default function TodoList( {user, isMobile}){
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);

       axios.get('http://localhost:5000/todos/611e92451c49a231f80a5709') 
            .then(response => {
                setTodoList(response.data.reverse());
                setTodoList(response.data.reverse().filter(todo => todo.createdAt > yesterday.toISOString()));
            });
    }, []);    

    return(
        <div>
            <section id="todolist">
                Not Overdue
                {todoList.map(todo => (
                    
                    <Todo key={todo._id} todoId={todo._id} updatedAt={todo.updatedAt} createdAt={todo.createdAt} todoText={todo.todoText} isMobile={isMobile} todoCompleted={todo.todoCompleted}/>
                ))}
            </section>
        </div>
    );

}



