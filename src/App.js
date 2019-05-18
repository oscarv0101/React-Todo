import React from 'react';
import TodoList from "../src/components/TodoComponents/TodoList";
import TodoForm from "../src/components/TodoComponents/TodoForm";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [
        {
          task: "Breathe",
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
   console.log("ItemId:", itemId);
   this.setState ({
     todos: this.state.todos.map(todo => {
      if (itemId === todo.id){
        return {
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
     })
   });
 };
 
 addItem = item => {
  const newItem = {
    name: item,
    id: Date.now(),
    completed: false
  };
  this.setState({
    todos: [...this.state.todos, newItem],
    todo: ""
  })
 }

 clearPurchased = event => {
  event.preventDefault();
  this.setState({
      todos: this.state.todos.filter(todo => !todo.completed)
  });
}

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        addItem = {this.addItem}
        />
        <TodoList
        todos = {this.state.todos}
        todo={this.state.todo}
        toggleItem={this.toggleItem}
        clearPurchased = {this.clearPurchased}
        />
        
        
      </div>
    );
  }
}


export default App;