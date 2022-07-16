import React, { useState } from "react";
import './Content.css';
import TodoList from "./TodoList";

function Content() {
    const [task, setTask] = useState(null);
    return(
        <>  
            <div className="Content">
                <section className="AddTodoItem">
                    <input type="text" placeholder="Add task to list" id="InputItem"/>
                    <button onClick={() => {
                        let value = document.getElementById("InputItem").value;
                        setTask(value)
                    }}>Add the Task</button>
                </section>
            </div>
            <TodoList addTask={task}/>
        </>
    )
}

export default Content;