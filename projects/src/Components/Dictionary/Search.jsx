import React from "react";
import { Navbar, Form, Row, Col, Dropdown, Button } from "react-bootstrap";

export const Search = ({ handleSearch, setWordSearch}) => {
  return (
    <div>
      <Navbar bg="dark">
        <Row style={{ width: "100%" }}>
          <Col md={2}></Col>
          <Col md={4}>
            <Form.Control type="text" placeholder="Enter "
            onChange={(e)=> setWordSearch(e.target.value)}></Form.Control>
          </Col>
          <Col md={1}>
            <Button onClick={handleSearch} >
              <i class="fas fa-search"></i>
            </Button>
          </Col>
          <Col md={3}>
            <Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-basic">
                Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English U.K.</Dropdown.Item>
                <Dropdown.Item href="#/action-2">English U.S.</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Hyderabadi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
          <Col md={2}></Col>
        </Row>
      </Navbar>
    </div>
  );
};
