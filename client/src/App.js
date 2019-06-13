import React from "react";
import { Route, NavLink } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import Users from "./components/Users";

function App() {
  return (
    <>
      <h1>Welcome</h1>

      <ul>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
      <main>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/users" component={Users} />
      </main>
    </>
  );
}

export default App;
