import React from "react";
import TodoItem from "./TodoItem";

class TodosList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeDetectProps={this.props.changeDetectProps}
            deleteBtnProps={this.props.deleteBtnProps}
            updateItem={this.props.updateItem} 
          />
        ))}
      </ul>
    );
  }
}

export default TodosList;