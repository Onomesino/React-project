import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from "react-bootstrap";
import Users from "./CrudComponent/Users";
import AddUserForm from "./CrudComponent/AddUserForm";

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      users: [
        {
          name: "Grace",
          email: "grace@gmail.com",
          gen: 21,
        },
        {
          name: "Blessing",
          email: "blessing@gmail.com",
          gen: 1,
        },
        {
          name: "Esther",
          email: "esther@gmail.com",
          gen: 2,
        },
        {
          name: "Confidence",
          email: "confi@gmail.com",
          gen: 20,
        },
      ],
    };
  }

  addNewUser = (user) => {
    this.setState({
      users: [...this.state.users, user ]
    })
  }
  render() {
    return (
      <>
        <Container fluid style={{marginTop:"2rem"}}>
          <Row>
            <Col md="4 ">
              
               <AddUserForm  addUser={this.addNewUser}/> 
            </Col>
            <Col>
              <Users usersData={this.state.users} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
