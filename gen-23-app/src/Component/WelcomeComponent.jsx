import React, { Component } from "react";
import Style  from "./Style.css";

class WelcomeComponent extends Component {
  constructor (props){
    super (props)
  }
  render() {
    return (
      <>
      <h1 className="react">{this.props.name} is awesome,react works!!! </h1>
      <img className='image' src='./me.png' />
      </>
       )
  }
}

export default WelcomeComponent;