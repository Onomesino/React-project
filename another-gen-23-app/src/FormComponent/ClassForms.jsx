import React, { Component } from "react";

export default class ClassForms extends Component {
  constructor() {
    super();
    this.state = {
      persons: [
        {
          name: "Esther",
          email: "esther@gmail.com",
          password: "5018",
        },
      
        {
          name: "Winifred",
          email: "wini@codetrain.com",
          password: "Asantewa",
        },
       
        {
          name: "Blessing",
          email: "blessing@email.com",
          password: "ma3no",
        },
      ],

      name: "",
      email: "",
      password: "",
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newPerson = {
      name:this.state.name,
      email:this.state.email,
      password:this.state.password
    };
    this.setState({
      persons: [...this.state.persons, newPerson],
      name:"",
      email:"",
      password:""
    });
  };
  render() {
    return (
      <section style={{ margin: "2rem" }}>

         <form onSubmit={this.handleSubmit}>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Email</label>
          <br />
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          ></input>
          <br />
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          ></input>
          <br />
          <br />
          <input type="Submit"></input>
        </form> 

        {this.state.persons.map((item, index) => {
          return (
            <div key={index}>
              <h2>Name:{item.name}</h2>
              <h3>Email:{item.email}</h3>
              <h3>Password: {item.password} </h3>
              <hr />
            </div>
          );
        })}
        
      </section>
    );
  }
}
