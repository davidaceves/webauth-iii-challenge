import React from "react";
import api from "../helpers/api.js";

class Signup extends React.Component {
  state = {
    department: "",
    username: "",
    password: ""
  };

  handleSubmit = async evt => {
    evt.preventDefault();

    try {
      const result = await api.post("/auth/register", {
        department: this.state.department,
        username: this.state.username,
        password: this.state.password
      });

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  render() {
    return (
      <>
        <h3>Signup</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="department"
            placeholder="Department"
            onChange={this.handleChange}
            value={this.state.department}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Signup</button>
        </form>
      </>
    );
  }
}

export default Signup;
