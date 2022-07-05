import React from 'react';
import PropTypes from 'prop-types';
import styles from './ToDoItem.module.css';

const completedStyle = {
  fontStyle: 'italic',
  color: '#595959',
  opacity: 0.4,
  textDecoration: 'line-through',
};

class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  editItems = () => {
    this.setState({
      editing: true,
    });
  };

  updateItemDone = (e) => {
    if (e.key === 'Enter') {
      this.setState({ editing: false });
    }
  };

  render() {
    const {
      todo, changeDetectProps, deleteBtnProps, updateItem,
    } = this.props;

    const { completed, id, title } = todo;

    const { editing } = this.state;

    const viewMode = {};
    const editMode = {};

    if (editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    return (
      <li className={styles.item}>

        <div onDoubleClick={this.editItems} style={viewMode}>
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={completed}
            onChange={() => changeDetectProps(id)}
          />
          <button onClick={() => deleteBtnProps(id)} type="button">
            Delete
          </button>
          <span style={completed ? completedStyle : null}>
            {title}
          </span>
        </div>

        <input
          type="text"
          className={styles.textInput}
          style={editMode}
          value={title}
          onChange={(e) => {
            updateItem(e.target.value, id);
          }}
          onKeyDown={this.updateItemDone}
        />
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  changeDetectProps: PropTypes.func.isRequired,
  deleteBtnProps: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodoItem;
