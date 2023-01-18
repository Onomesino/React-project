import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import TodoListFunction from "./TodoListComponent/TodoListFunction";
import TodoClassForms from "./TodoListComponent/TodoClassForms";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      List: [
        {
          items: "Rice",
          quantity: "5 bags",
          amount: "180ghs",
          id: "0-1wein4£",
        },
        {
          items: "Beans",
          quantity: "2 bags",
          amount: "100ghs",
          id: "@-3njhpnbo9980",
        },
        {
          items: "Garri",
          quantity: "1 bag",
          amount: "80ghs",
          id: "7yi-hgbk34$",
        },
      ],
    };
  }
  addNewList = (items) => {
    items.id = Math.random().toString();
    this.setState({
      List: [...this.state.List, items],
    });
  };
  deleteList = (id) => {
    let undeletedList = this.state.List.filter(items => items.id !== id);
    this.setState({
      List: undeletedList,
    });
  };
  editList = (id, updatedList) => {
    this.setState({
      List: this.state.List.map(items => items.id === id ? updatedList : items)
    })
  }
  render() {
    return (
      <>
      <h1>My Shopping List</h1>
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <TodoClassForms addList={this.addNewList} />
            </Col>
            <Col>
              <TodoListFunction
                Listbudget={this.state.List}
                deleteList={this.deleteList}
                editList={this.editList}
              />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
