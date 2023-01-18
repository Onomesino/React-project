import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import TodoList from "./TodoList.css"

class TodoNewList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.itemInfo.items,
      quantity: props.itemInfo.quantity,
      amount: props.itemInfo.amount,
      id: props.itemInfo.id
    };
  }
  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editList(this.state.id, this.state)
    this.setState({
      items: "",
      quantity: "",
      amount: "",
    });
    this.props.closeModal();
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Items</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter items"
            name="items"
            value={this.state.items}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="string"
            placeholder="quantity"
            name="quantity"
            value={this.state.quantity}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Amount</Form.Label>
          <Form.Control
            type="string"
            placeholder="amount"
            name="amount"
            value={this.state.amount}
            onChange={this.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default TodoNewList;
