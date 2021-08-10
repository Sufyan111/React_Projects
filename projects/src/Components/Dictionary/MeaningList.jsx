import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { Meaning } from "./Meaning";

export const MeaningList = ({ item }) => {
  return (
    <div>
      <Card>
        <Row>
          <Col md={6}>
            <h1>{item.word}</h1>
            {item.meanings.map((n) => (
              <Meaning n={n} />
            ))}
          </Col>
        </Row>
      </Card>
    </div>
  );
};
