import React, { Component } from "react";

class InputTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  itemSubmit = (e) => {
    e.preventDefault();
    this.props.addItemProps(this.state.title);
    this.setState({
      title: ""
    });
  }

  render () {
    return (
      <form onSubmit={this.itemSubmit}>
        <input
          type="text"
          placeholder="Add an item..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}  
        />
        <button>Submit Item</button>
      </form>
    );
  };
}

export default InputTodo;