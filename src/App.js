import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tasks: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ],
    }
  }

  addTask = (task) => {
    const newTask = {
      task: task,
      id: Date.now(),
      completed: false
    };

    this.setState({
      tasks: [...this.state.tasks, newTask]
    });
  }

  toggleComplete = taskId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if (taskId === item.id){
          return {...item, completed: !item.completed}
        }
        return item
      })
    })
  }

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter(task => !task.completed)
    })
  }

  isComplete = task => {
    if (task.completed === false){
      return 'notComplete'
    }
    else {
      return 'complete'
    }
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList tasks={this.state.tasks} togCom={this.toggleComplete} isComplete={this.isComplete}/>
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
