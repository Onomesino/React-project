import React, { Component } from 'react'

export default class Lesson extends Component {
  constructor(){
    super()
    this.state={
      person:{
        name:"Esther",
        age:19,
        gen:22
      }
    }
  }
  render() {
    return (
      <>
        <h1>Name:{this.state.person.name}</h1>
        <hr />
        <h2>Age:{this.state.person.age}</h2>
        <hr />
        <h2>Gen:{this.state.person.gen}</h2>
      </>
    )
  }
}
