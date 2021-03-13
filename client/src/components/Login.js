import React from "react";
import api from "../helpers/api.js";
import { withRouter } from "react-router-dom";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = async evt => {
    evt.preventDefault();
    console.log(this.state);

    try {
      const result = await api.post("/auth/login", {
        username: this.state.username,
        password: this.state.password
      });

      //   document.cookie = `token=${result.data.token}`;
      localStorage.setItem("token", result.data.token);
      this.props.history.push("/users");
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
        <h3>Login</h3>

        <form onSubmit={this.handleSubmit}>
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

export default withRouter(Login);
