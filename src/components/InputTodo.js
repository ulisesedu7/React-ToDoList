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
    if (this.state.title.trim()) {
      this.props.addItemProps(this.state.title);
      this.setState({
        title: "",
      });
    } else {
      alert("Please write an item")
    }
    
  }

  render () {
    return (
      <form onSubmit={this.itemSubmit} className="form-container">
        <input
          type="text"
          className="text-input"
          placeholder="Add an item..."
          value={this.state.title}
          name="title"
          onChange={this.onChange}  
        />
        <button className="submit-input">Submit Item</button>
      </form>
    );
  };
}

export default InputTodo;