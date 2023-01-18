import React from "react";
import { Container, Row } from "react-bootstrap";
import TodoCard from "./TodoCard";
import TodoList from "./TodoList.css"

const TodoListFunction = (props) => {
  return (
    <Container>
      <Row>
        {props.Listbudget.map((items) => {
          return (
            <TodoCard
              itemInfo={items}
              key={items.id}
              deleteList={props.deleteList}
              editList={props.editList}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default TodoListFunction;
