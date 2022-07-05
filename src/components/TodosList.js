import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodosList extends React.PureComponent {
  render() {
    const {
      todos, changeDetectProps, deleteBtnProps, updateItem,
    } = this.props;

    return (
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            changeDetectProps={changeDetectProps}
            deleteBtnProps={deleteBtnProps}
            updateItem={updateItem}
          />
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    completed: PropTypes.bool,
  })).isRequired,
  changeDetectProps: PropTypes.func.isRequired,
  deleteBtnProps: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired,
};

export default TodosList;
