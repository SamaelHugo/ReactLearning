import './App.css';
import {useState} from "react";
import {Task} from "./task";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleChange = (e) => {
        setNewTask(e.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            isCompleted: false
        }
      setTodoList([...todoList, task]);
    };

    const deleteTask = (id) => {

        // const newList = []; новый лист
        // for (let i = 0; i < todoList.length; i++) {
        //     if (todoList[i].id !== id) {
        //         newList.push(todoList[i])
        //     }
        // }
        // setTodoList(newList)

        setTodoList(todoList.filter((task) => task.id !== id));
    }

    const completeTask = (id) => {

        setTodoList(todoList.map((task) =>
            task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
        ));


        // const newList = [];
        // for (let i = 0; i < todoList.length; i++) {
        //     if (todoList[i].id === id) {
        //         newList.push({...todoList[i], isCompleted: !todoList[i].isCompleted});
        //     } else {
        //         newList.push(todoList[i]);
        //     }
        // }
        // setTodoList(newList)

        setTodoList(todoList.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
    }

  return (
    <div className="App">
        <div className="addTask">
            <input onChange={handleChange} type="text"/>
            <button onClick={addTask}>Add Task</button>
        </div>
        <div className="list">
            {todoList.map((task) => {
                return <Task
                    taskName={task.taskName}
                    id={task.id}
                    deleteTask={deleteTask}
                    completeTask={completeTask}
                    isCompleted={task.isCompleted}
                />
            })}
        </div>
    </div>
  );
}


export default App;
