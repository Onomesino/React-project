import React, { Component } from 'react'
import SimpleCard from "./SimpleCard.css";

class Description extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
      <h2 className='display'>I am a Software {this.props.profession} at Codetrain </h2>
      </>
    )
  }
}

export default Description
 