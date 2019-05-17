import React from "react"

const Todo = props => {
    return (
        <div
        className={`todo${props.todo.completed ? "completed": ""}`}
        onCLick = {()=> props.toggleItem(props.todo.id)}>
            <p>{props.todo.task}</p>

        </div>
    )
}

export default Todo;