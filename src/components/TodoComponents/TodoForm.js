import React from 'react';

const TodoForm = props => {
    return (
        <form onSubmit={props.addTodo} >
            <input 
            placeholder="...todo"
            />
            <button >Add Todo</button>
        </form>
        
    )
}

export default TodoForm;