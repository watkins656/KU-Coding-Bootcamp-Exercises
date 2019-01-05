import React, { Component } from "react";

class Form extends Component {
  // Setting the initial values of this.state.username and this.state.password
  state = {
    username: "",
    password: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
     {
      alert(`Hello ${this.state.username}.  Your password is: ${this.state.password}`)
    }

    this.setState({
      username:"",
      password:""
    })
  }

  render() {
    return (
      <form>
        <p>Username: {this.state.username}</p>

        <input
        name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleInputChange}
        />
        <p>Password: {this.state.password}</p>
        <input
        name="password"
          type="password"
          placeholder="Password"
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleFormSubmit}>Submit</button>
      </form>
    );
  }
}

export default Form;
