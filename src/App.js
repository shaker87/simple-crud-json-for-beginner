import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import AddUser from "./Components/Pages/User/AddUser";
import EditUser from "./Components/Pages/User/EditUser";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/add-user">
          <AddUser></AddUser>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/edit-user/:id">
          <EditUser></EditUser>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;