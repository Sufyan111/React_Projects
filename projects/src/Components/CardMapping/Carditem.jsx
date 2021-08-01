import React from "react";
import { Card } from "react-bootstrap";

export const Carditem = ({item}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="logo192.png" />
      <Card.Body>
        <Card.Title>{item.firstName} {item.lastName}</Card.Title>
        <span>
          <h6>Email: {item.email}</h6>
        </span>
        <span>
          <h6>City: {item.city}</h6>
        </span>
      </Card.Body>
    </Card>
  );
};
