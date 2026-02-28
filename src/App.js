import './App.css';
import {useState} from "react";
import {Task} from "./task";

function App() {
    const [todoList, setTodoList] = useState([]); // стейт, создает список заданий называется todoList,
    // чтобы его менять создается сеттудулист
    const [newTask, setNewTask] = useState(""); // само задание, называется ньютаск это строка,
    // чтобы взаимодействовать используется сетнью таск

    const handleChange = (e) => { // функция, для изменения значения задания
        setNewTask(e.target.value);
    };

    const addTask = () => { // функция добавления задания
        const task = { // само задание это объект с 3 параметрами
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1, // айдм, чтобы понимать какой номер.
            // берется размер всего листа, если 0, то задание 1, если нет, то у последнего задания берется айди и добавляется 1
            taskName: newTask, // само задание которое из стейта
            isCompleted: false // по базе фолс
        }
      setTodoList([...todoList, task]); // вызывается сет тудулист чтобы поменять значение листа и добавить задание
    };

    const deleteTask = (id) => { // функция удаления задания, принимает айди
        setTodoList(todoList.filter((task) => task.id !== id)); // метод фильтр проходит по каждому элементу
        // списка тудулист и возвращает новый, оставляя только те которые прошли проверку, тоесть задача оставляется
        // если ее id не равен данному айди который передался, функция записывает новый массив в стейт без айди который преедался
    }

    const completeTask = (id) => { // функция принимает айди, меняет булеан
        setTodoList(todoList.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task));
        // метод мап проходит по каждому и меняет таск если проходит проверку, если эта та самя задача которую кликнули, если нет
        // то возвращаем просто task, если да то создаем копию задачи но меняем будеан и сет туду лист записывает новый массив
    }

  return (
    <div className="App">
        <div className="addTask">
            <input onChange={handleChange} type="text"/> // чтобы передать данные
            <button onClick={addTask}>Add Task</button> // вызывается функция добавления
        </div>
        <div className="list">
            {todoList.map((task) => { // показывается весь список, метод мап проходит по каждому заданию
                return <Task // компонент передаются все нужные данные, в том числе и функции
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
