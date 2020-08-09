import React, { Component } from "react";
import DrawGrid from "./Drawgrid";
import "./styles.css";

class Seat extends Component {
  constructor() {
    super();
    this.state = {
      seat: [
        "Agent1",
        "Agent2",
        "Agent3",
        "Agent4",
        "Agent5",
        "Agent6",
        "Agent7",
        "Agent8",
        "Agent9",
        "Agent10",
        "Agent11",
        "Agent12",
        "Agent13",
        "Agent14",
        "Agent15",
        "Agent16",
        "Agent17",
        "Agent18",
        "Agent19",
        "Agent20",
        "Agent21",
        "Agent22",
        "Agent23",
        "Agent24",
      ],
      seatAvailable: [
        "Agent1",
        "Agent2",
        "Agent3",
        "Agent4",
        "Agent5",
        "Agent6",
        "Agent7",
        "Agent8",
        "Agent9",
        "Agent10",
        "Agent11",
        "Agent12",
        "Agent13",
        "Agent14",
        "Agent15",
        "Agent16",
        "Agent17",
        "Agent18",
        "Agent19",
        "Agent20",
        "Agent21",
        "Agent22",
        "Agent23",
        "Agent24",
      ],
      seatReserved: [],
    };
  }

  onClickData(seat) {
    if (this.state.seatReserved.indexOf(seat) > -1) {
      this.setState({
        seatAvailable: this.state.seatAvailable.concat(seat),
        seatReserved: this.state.seatReserved.filter((res) => res != seat),
      });
    } else {
      this.setState({
        seatReserved: this.state.seatReserved.concat(seat),
        seatAvailable: this.state.seatAvailable.filter((res) => res != seat),
      });
    }
  }

  render() {
    return (
      <div>
        <h5 className="seathead">Select a Seat</h5>
        <DrawGrid
          seat={this.state.seat}
          available={this.state.seatAvailable}
          reserved={this.state.seatReserved}
          onClickData={this.onClickData.bind(this)}
        />
      </div>
    );
  }
}
export default Seat;
