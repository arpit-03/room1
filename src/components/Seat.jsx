import React, {Component} from 'react';
import DrawGrid from './Drawgrid';
import './styles.css';

class Seat extends Component {
  
    constructor() {
      super();
        this.state = {
        seat: [
          'Agent1','Agent2','Agent3',
          'Agent4','Agent5','Agent6',
          'Agent7','Agent8','Agent9'
        ],
        seatAvailable: [
          'Agent1','Agent2','Agent3',
          'Agent4','Agent5','Agent6',
          'Agent7','Agent8','Agent9'
        ],
        seatReserved: []
      }
    }
    
    onClickData(seat) {
      if(this.state.seatReserved.indexOf(seat) > -1 ) {
        this.setState({
          seatAvailable: this.state.seatAvailable.concat(seat),
          seatReserved: this.state.seatReserved.filter(res => res != seat)
        })
      } else {
        this.setState({
          seatReserved: this.state.seatReserved.concat(seat),
          seatAvailable: this.state.seatAvailable.filter(res => res != seat)
        })
      }
    }
    
    render() {
      return (
        <div>
          <h1>Select the Seats</h1>
          <DrawGrid 
            seat = { this.state.seat }
            available = { this.state.seatAvailable }
            reserved = { this.state.seatReserved }
            onClickData = { this.onClickData.bind(this) }
            />
        </div>
      )
    }
  }
export default Seat;