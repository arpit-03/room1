import React, { Component } from "react";
import AvailableList from "./AvailableList";
import ReservedList from "./ReservedList";
import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
import Table from "./Table";

class DrawGrid extends Component {
  render() {
    return (
      <div className="container">
        {/* <table className="grid">
          <tbody>
            <tr>
              {this.props.seat.map((row) => (
                <td key={row} onClick={(e) => this.onClickSeat(row)}>
                  <FontAwesomeIcon icon={faChair} />
                </td>
              ))}
            </tr>
          </tbody>

        </table> */}
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <Table />
        <div className="instructor">
          <p>Instructor</p>
        </div>
      </div>
    );
  }

  onClickSeat(seat) {
    this.props.onClickData(seat);
  }
}
export default DrawGrid;
