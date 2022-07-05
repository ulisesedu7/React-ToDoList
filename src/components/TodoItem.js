import React from "react";
import styles from './ToDoItem.module.css';

const completedStyle = {
  fontStyle: "italic",
  color: "#595959",
  opacity: 0.4,
  textDecoration: "line-through",
}

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  editItems = () => {
    this.setState({
      editing: true,
    });
  };
  
  render() {
    const { completed, id, title } = this.props.todo;

    let viewMode = {}
    let editMode = {}

    if (this.state.editing) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    }

    return (
    <li className={styles.item}>

      <div onDoubleClick={this.editItems} style={viewMode}>
        <input 
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.changeDetectProps(id)}
        />
        <button onClick={() => this.props.deleteBtnProps(id)}>
          Delete
        </button>
        <span style={completed ? completedStyle : null}>
          {this.props.todo.title}
        </span>
      </div>

      <input
        type="text"
        className={styles.textInput}
        style={editMode}
        value={title}
        onChange={e => {
          this.props.updateItem(e.target.value, id)
        }}
        />
    </li>
    );
  };
}

export default TodoItem;