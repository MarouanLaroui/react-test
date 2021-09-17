import React from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function TaskList(props){

    /* Initialize the tasks, and create a setTask method */
    const [tasks, setTasks] = React.useState(props.tasks)
    
    /*methods ?*/
    const addTask = (newTask) =>{

        setTasks([...tasks,newTask])
        console.log(tasks)
    }
    /* GUI */
    return (
        <div style={{display : 'inline-block'}}>
            <h2>{props.name}</h2>
            <ul id={props.name}>
                {
                tasks.map( (t,index) => <Task title={t} key={index} /> )
                }
            </ul>

            <TaskForm props={props} handleClick={addTask}/>
        </div>
    )
}

export default TaskList