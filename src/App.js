import React from "react";
import "./App.css";
import Login from "./components/Login";
import Room from "./components/Room";
import Seat from "./components/Seat";
import Classroom from "./components/Classroom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './components/styles.css';
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/rooms">
            <Room />
          </Route>
          <Route exact path="/seatselection">
            <Seat />
          </Route>
          <Route exact path="/class">
            <Classroom />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
