import React from "react";
import { Col, Row, Button, NavItem } from "react-bootstrap";
export const Pronunciation = () => {
  const handleAudio = () => {
    
  }  
  return (
    <div>
      <Row style={{ width: "100%" }}>
        <Col md={2}></Col>
        <Col md={5}>
          <p>reat</p>
          <Button>Play</Button>
        </Col>
        <Col md={3}></Col>
        <Col md={2}></Col>
      </Row>
    </div>
  );
};
