import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export const Meaning = ({ n }) => {
  return (
    <div>
      <Card style={{ width: "500px" }}>
        <Card.Title>{n.partOfSpeech}</Card.Title>
        <Card.Body>
          {n.definitions.map((def, index) => (
            <p>
              <span>
                {" "}
                {index + 1}.{def.definition}
              </span><br /><br />
              <p>{def.example}</p>X
            </p>
          ))}
        </Card.Body>
      </Card>
    </div>
  );
};
