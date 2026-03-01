import {useState} from "react";

const [task, setTask] =  useState("")
const [taskList, setTaskList] = useState([])

const handleChange = (e) => {
    setTask(e.target.value)
}

const addTask = () => {
    const task = {
        id: taskList.length === 0 ? 1 : taskList[taskList.length - 1].id + 1,
        taskName: task,
        isCompleted: false
    }

    setTaskList([...taskList, task])
}

const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => {task.id !== id}))
}

const completeTask = (id) => {
    setTaskList(taskList.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task))
}


<div>
    <input onChange={handleChange} type="text"/>
    <button onClick={addTask} >Add task</button>
    <div>
        {taskList.map(task) => {
            return <Task
                taskName = {task.taskName}
                id = {task.id}
                completeTask = {completeTask}
                deleteTask = {deleteTask}
                isCompleted = {task.isCompleted}
            />
        }}
    </div>
</div>


const Task = (props) => {
    <div>
        <h1 style={{color: props.isCompleted ? "green" : "black"}} >{props.taskName}</h1>
        <button onClick={props.completeTask(props.id)} >Complete</button>
        <button onClick={props.deleteTask(props.id)} >X</button>
    </div>
}