import React, { Component } from "react";
import {Form, Button} from "react-bootstrap"

class AddUserForm extends Component {
    constructor(){
        super()
        this.state={
            name:"",
            email:"",
            gen:""
        }
    }
    handleChange = (e) => {
      e.preventDefault()
        this.setState({
            [e.target.name] : e.target.value, 
        });
        console.log(this.state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        
    }
  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" name="name"  onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" placeholder="Enter Gen" name="gen" onChange={this.handleChange}/>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddUserForm;
