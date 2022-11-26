import React, { Component } from "react";
import "./Counter.css";

class State extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.handleIncreaseCount = this.handleIncreaseCount.bind(this);
  }
  handleIncreaseCount(e) {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  }
  handleDecreaseCount = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        
        <h1>Counter: {this.state.count} </h1>
        <hr />
        <button className="claa" onClick={this.handleIncreaseCount}>
          Increase
        </button>
        <button className="cla" onClick={this.handleDecreaseCount}>
          Decrease
        </button>
      </div>
    );
  }
}

export default State;
