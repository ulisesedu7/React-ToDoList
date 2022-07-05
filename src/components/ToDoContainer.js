import React from "react";
import { v4 as uuidv4 } from "uuid";
import TodosList from './TodosList';
import Header from "./Header";
import InputTodo from "./InputTodo";
import ToDoStyles from '../ToDoStyles.css';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
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
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
  };

  updateItem = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.title = updatedTitle
        }
        return todo;
      }),
    });
  };

  render() {
    return (
      <div className="main-container">
        <div className="inner-container">
        <Header />
        <InputTodo addItemProps={this.addItem} />
        <TodosList
          todos={this.state.todos}
          changeDetectProps={this.changeDetect}
          deleteBtnProps={this.deleteBtn}
          updateItem={this.updateItem}
        />
        </div>
      </div>
    );
  };
}
export default TodoContainer;