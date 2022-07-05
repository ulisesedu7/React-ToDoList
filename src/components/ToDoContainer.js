import React from "react";
import TodosList from './TodosList';
import Header from "./Header";
import InputTodo from "./InputTodo";

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Setup development environment",
        completed: true
      },
      {
        id: 2,
        title: "Develop website and add content",
        completed: false
      },
      {
        id: 3,
        title: "Deploy to live server",
        completed: false
      }
    ]
   };

  changeDetect = (id) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      }),
    }));
  };

  deleteBtn = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  };

  addItem = (title) => {
    const newTodo = {
      id: 4,
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <InputTodo addItemProps={this.addItem} />
        <TodosList
          todos={this.state.todos}
          changeDetectProps={this.changeDetect}
          deleteBtnProps={this.deleteBtn} 
        />
      </div>
    );
  };
}
export default TodoContainer;