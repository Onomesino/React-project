import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import TodoNewList from "./TodoNewList";
import TodoList from "./TodoList.css"

const TodoClassForms = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = (e) => {
    e.preventDefault();
    props.deleteList(props.itemInfo.id);
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TodoNewList
            itemInfo={props.itemInfo}
            editList={props.editList}
            closeModal={handleClose}
          />
        </Modal.Body>
      </Modal>

      <Col md="3">
        <Card>
          <Card.Body>
            <Card.Subtitle className="mb-2 text-muted">
              List Items
            </Card.Subtitle>
            <Card.Title>{props.itemInfo.items}</Card.Title>
            <Card.Text>
              <p>Quantity:{props.itemInfo.quantity}</p>
              <p>Amount:{props.itemInfo.amount}</p>
            </Card.Text>
            <Card.Link href="#">
              <Button variant="primary" size="sm" onClick={handleShow}>
                Edit
              </Button>
            </Card.Link>
            <Card.Link href="#">
              <Button variant="danger" size="sm" onClick={handleDelete}>
                Delete
              </Button>
            </Card.Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default TodoClassForms;
