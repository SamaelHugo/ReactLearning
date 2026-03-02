import {useState} from "react";


const [task, setTask] = useState()
const [taskList, setTaskList] = useState()


const Task = (props) => {
    <div>
        <input onChange={handleChange} type="text"/>
        <button onClick={addTask} ></button>
    </div>
    <div>
        <h1 style={{color: props.isCompleted ? "green" : "black"}} >{props.taskName}</h1>
        <button onClick={() => {props.completeTask(props.id)}} >Complete</button>
        <button onClick={() => {props.deleteTask(props.id)}} >x</button>
    </div>
}

const handleChange = (e) => {
    setTask(e.target.value)
}


const addTask = () => {
    const newTask = {
        id: taskList.length === 0 ? 1 : taskList.length[taskList.length - 1].id + 1,
        taskName: task,
        isCompleted: false,
    }
    setTaskList([...taskList, newTask])
}


const deleteTask = (id) => {
    setTaskList(taskList.filter((newTask) => newTask.id !== id));
}

const completeTask = (id) => {
    setTaskList(taskList.map((newTask) => newTask.id === id ? {...newTask, isCompleted : !newTask.isCompleted} : task))
}