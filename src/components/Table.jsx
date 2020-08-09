import React, { Component } from "react";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
class Table extends Component {
  state = {};
  render() {
    return (
      <div className="fulltable">
        <div className="chairs">
          <FontAwesomeIcon icon={faChair} />
          <FontAwesomeIcon icon={faChair} />
          <FontAwesomeIcon icon={faChair} />
          <FontAwesomeIcon icon={faChair} />
        </div>
        <div className="table"></div>
      </div>
    );
  }
}

export default Table;
