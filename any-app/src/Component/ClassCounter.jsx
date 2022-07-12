import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  increament = () => {
    this.setState({ count: this.state.count + 2 });
  };
  Decreament = () => {
    this.setState({ count: this.state.count - 2 });
  };
  render() {
    return (
      <>
        <h1>COUNT {this.state.count}</h1>
        <button onClick={this.increament}>Increase</button>
        <button onClick={this.Decreament}>Decrease</button>
      </>
    );
  }
}
export default ClassCounter;
