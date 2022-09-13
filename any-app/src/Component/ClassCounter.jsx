import React, { Component } from "react";
import "./MyStyle.css";
export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increament = () => {
    this.setState({ count: this.state.count + 1 });
  };
  Decreament = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="All">
        <h1 className="cen">COUNT {this.state.count}</h1>
        <hr />
        <button className="primary" onClick={this.increament}>
          Increase
        </button>
        <button className="primary" onClick={this.Decreament}>
          Decrease
        </button>
      </div>
    );
  }
}
export default ClassCounter;
