import React, { Component } from "react";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Table extends Component {
  state = {};
  handleClick(e) {
    var p = document.getElementById(e);
    console.log(p.style.color);
    if (p.style.color == "red") p.style.color = "#3adc3a";
    else p.style.color = "red";
  }
  render() {
    return (
      <div className="fulltable">
        <div className="chairs">
          <div
            id={this.props.id}
            onClick={(e) => {
              this.handleClick(this.props.id);
            }}
          >
            <FontAwesomeIcon icon={faChair} />
          </div>
          <div
            id={this.props.id + 1}
            onClick={(e) => {
              this.handleClick(this.props.id + 1);
            }}
          >
            <FontAwesomeIcon icon={faChair} />
          </div>
          <div
            id={this.props.id + 2}
            onClick={(e) => {
              this.handleClick(this.props.id + 2);
            }}
          >
            <FontAwesomeIcon icon={faChair} />
          </div>
          <div
            id={this.props.id + 3}
            onClick={(e) => {
              this.handleClick(this.props.id + 3);
            }}
          >
            <FontAwesomeIcon icon={faChair} />
          </div>
        </div>
        <div className="table"></div>
      </div>
    );
  }
}

export default Table;
