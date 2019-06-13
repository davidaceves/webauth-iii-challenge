import React from "react";
import api from "../helpers/api.js";

class Signup extends React.Component {
  state = {
    fullname: "",
    username: "",
    password: ""
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    console.log(this.state);

    try {
      const result = await api.post("/auth/register", {
        fullname: this.state.fullname,
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
            name="fullname"
            placeholder="Fullname"
            onChange={this.handleChange}
            value={this.state.fullname}
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
          <button type="submit">Login</button>
        </form>
      </>
    );
  }
}

export default Signup;
