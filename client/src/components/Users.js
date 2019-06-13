import React from "react";
import api from "../helpers/api.js";

class Users extends React.Component {
  state = {
    users: []
  };

  async componentDidMount() {
    try {
      const result = await api.get("/users");

      this.setState({
        users: result.data
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <>
        <h3>Users</h3>

        <ul>
          {this.state.users.map((user, i) => {
            return <li key={i}>{user.username}</li>;
          })}
        </ul>
      </>
    );
  }
}

export default Users;
