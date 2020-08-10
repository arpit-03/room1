import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form } from "react-bootstrap";
import "../styles/login.css";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Seat from './Seat';
class Login extends Component {
  state = {
    id : "",
    password : "",
    user_id : "",
    user_pass : ""
  };
  onSubmit_helper = (event) => {
    event.preventDefault();
    this.setState({user_id : this.state.id, user_pass : this.state.password});
    
  }
  onChange_helper_id = (event) => {
    console.log(event.target.value);
    this.setState({id: event.target.value});
  } 
  onChange_helper_pass = (event) => {
    console.log(event.target.value);
    this.setState({password : event.target.value})
  }
  render() {
    if(this.state.user_id == "abc@gmail.com" && this.state.user_pass == "123"){
      return (
       <Redirect push to = "/seatselection">
         <Seat />
       </Redirect>
      )
    }
  else{
      return (
        <div className="login">
          <Form onSubmit = {this.onSubmit_helper}>
            <Form.Group controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" onChange = {this.onChange_helper_id} />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" onChange = {this.onChange_helper_pass}>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit = {this.onSubmit_helper}>
              Submit
            </Button> 
          </Form>
        </div>
      );
    }
  }
}

export default Login;
