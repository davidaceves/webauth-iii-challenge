import React from "react";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  handleSubmit = evt => {
    evt.preventDefault();
    console.log(this.state);
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

export default Login;
