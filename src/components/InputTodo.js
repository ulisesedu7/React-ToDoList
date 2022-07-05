import React, { Component } from 'react';
import PropTypes from 'prop-types';

class InputTodo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  itemSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const { addItemProps } = this.props;

    if (title.trim()) {
      addItemProps(title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write an item');
    }
  }

  render() {
    const { title } = this.state;

    return (
      <form onSubmit={this.itemSubmit} className="form-container">
        <input
          type="text"
          className="text-input"
          placeholder="Add an item..."
          value={title}
          name="title"
          onChange={this.onChange}
        />
        <button className="submit-input" type="button">Submit Item</button>
      </form>
    );
  }
}

InputTodo.propTypes = {
  addItemProps: PropTypes.func.isRequired,
};

export default InputTodo;
