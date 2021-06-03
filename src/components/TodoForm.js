import React from 'react';

export default class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
          task: "",
        };
        
      }

    handleChanges = e => {
        this.setState({task: e.target.value})
    }

    submitTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.task);
        this.setState({task: '',});
    }

    render(){
        
        return(
            <div>
                <form onSubmit={this.submitTask}>
            <input
                type="text"
                name="task"
                value={this.state.task}
                onChange={this.handleChanges}/>
                <button>Add</button>
            </form>
            <button onClick={this.props.clearCompleted}>Clear completed tasks</button>
            </div>
        )
    }
}