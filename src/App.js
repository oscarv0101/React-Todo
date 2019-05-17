import React from 'react';
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: <h1>Todo List: MVP</h1>,
          id: 1,
          completed: false
        },
        {
          task: 'Learn setState()',
          id: 2,
          completed: false
        },
        {
          task: 'Style my Todo List',
          id: 3,
          completed: false
        }
      ],
      todo: ''
    };
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 toggleItem = itemId => {
   console.log("ItemId: ", itemId)
 }
 addTodo = event => {
   event.preventDefault();
 }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList
        todos = {this.state.todos}
        todo={this.state.todo}
        toggleItem={this.toggleItem}/>
        <TodoForm
        addTodo = {this.addTodo}/>
      </div>
    );
  }
}


export default App;