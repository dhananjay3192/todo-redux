import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "reactstrap";
import './App.css';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Container>
        <Row>
          <Col>
            <TodoList />
            <TodoForm />
          </Col>
        </Row>
      </Container>
    </Provider>
  );
}

export default App;
