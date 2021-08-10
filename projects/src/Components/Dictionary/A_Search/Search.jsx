import React from "react";
import { Col, Navbar, Form, Button, Row } from "react-bootstrap";
import "./Search_style.css";

export const Search = () => {
  return (
    <div>
      <Navbar>
        <Row>
          <Col md={3}></Col>
          <Col md={4}>
            <Form.Control
              type="text"
              placeholder="Enter the word"
              class="form-control"
            />
          </Col>
          <Col md={3}>
            <Button variant="primary" class="search-button">
              <i class="fa fa-search"></i>
            </Button>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Navbar>
    </div>
  );
};
