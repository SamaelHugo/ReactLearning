export const Task = (props) => { // функция таск, принимает пропс (аргументы, любые)
    return (
        <div>
            <h1 style={{color: props.isCompleted ? "green" : "black"}}>{props.taskName}</h1> // Стиль, меняется цвет в зависимости от булеана исКосплетед
            <button onClick={() => props.completeTask(props.id)}>Complete</button> // кнопка, при нажатии выполняется функция которая потом меняет булиан, передается айди
            <button onClick={() => props.deleteTask(props.id)}>X</button> // кнопка при нажатии выполняется функция которя потом удаляет таск, передается также айди
        </div>
    )
}