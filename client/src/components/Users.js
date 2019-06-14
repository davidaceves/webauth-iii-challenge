import React from "react";
import { withRouter } from "react-router-dom";
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
      if (err.response.status === 401 || err.response.status === 403) {
        this.props.history.push("/login");
      }
      console.log(err);
    }
  }
  render() {
    return (
      <>
        <h3>Users</h3>

        {this.state.users.map((user, i) => {
          return (
            <ul>
              <li key={user.id}>{user.username}</li>
              <li key={i}>{user.department}</li>
            </ul>
          );
        })}
      </>
    );
  }
}

export default withRouter(Users);
