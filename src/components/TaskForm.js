import React from "react";

function TaskForm(props){
    return (
        <div>
            <input id={props.name} placeholder="Write a new task"></input>
            <button id={props.name} type="submit" >Add</button>
        </div>
    )
}

export default TaskForm