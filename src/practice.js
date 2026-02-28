import {useState} from "react";

const [taskList, setTaskList] = useState();
const [newTask  , setNewTask] = useState();


const setTask = (e) => {
    setNewTask(e.target.value)
}

const addTask = () => {
    const task = {
        id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
        taskName: newTask,
        isCompleted: false
    }
}

const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id))
}

const completeTask = (id) => {
    setTaskList(taskList.map((task) => task.id === id ? {...task, isCompleted: !task.isCompleted} : task));
}



const Task = (props) => {
    return (
        <div>
            <h1 style={{color: props.isCompleted ? "green" : "black"}} >{props.taskName}</h1>
            <button onClick={() => {props.completeTask(props.id)}} >Complete</button>
            <button onClick={() => {props.deleteTask(props.id)}} >X</button>
        </div>
    )
}