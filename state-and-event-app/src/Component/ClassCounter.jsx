import React, {Component} from 'react';

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state={
      number: 0
    }
    this.handleIncreaseNumber=this.handleIncreaseNumber.bind(this)
  }
  handleIncreaseNumber(e){
    e.preventDefault();
    this.setState({number: this.state.number +2})
  }
    handleDecreaseNumber= (e)=> {
      e.preventDefault();
      this.setState({number:this.state.number -2})
  }
  render() {
    return (
      <div>
        <h1>Counter: {this.state.number}</h1>
        <hr/>
        <button onClick={this.handleIncreaseNumber}>increase</button>
        <button onClick={this.handleDecreaseNumber}>Decrease</button>
      </div>
    );
  }
}

export default ClassCounter;

