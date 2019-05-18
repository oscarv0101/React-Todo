import React from 'react';


class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            item: ""
        }
    }
    


    handleChange = event => {
        this.setState({ [event.target.name]: event.target.key})
    }

    submitItem = event => {
        event.preventDefault();
        this.setState({ item: ""});
        this.props.addItem(this.state.item)
    }
    render(){
        console.log('Rendering form')
        return(
            <form onSubmit={this.submitItem}>
                <input 
                type="text"
                value={this.state.item}
                name="item"
                onChange={this.handleChange}/>
                <button>Add</button>
                
            </form>
        )
    }
};









export default TodoForm;
// const TodoForm = props => {
//     return (
//         <form onSubmit={props.addTodo} >
//             <input 
//             placeholder="...todo"
//             />
//             <button >Add Todo</button>
//         </form>
        
//     )
// }

// export default TodoForm;
