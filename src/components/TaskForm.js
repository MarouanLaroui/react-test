import React from "react";

function TaskForm(props){
    const [input, setInput] = React.useState('')

    const handleChange = (event) =>{
        console.log(event.target.value)
        setInput(event.target.value)
    }
    const submitTask = () =>{
        console.log(input)
        console.log("on submit la mon frere")
        
        /*calls the method of the TaskList component*/
        props.handleClick(input);
        setInput('')
    
    }
    return (
        <div>
            <input id={props.name} value={input} placeholder="Write a new task" onChange={handleChange}></input>
            <button id={props.name}  type="submit" onClick={submitTask} >Add</button>
        </div>
    )
}

export default TaskForm