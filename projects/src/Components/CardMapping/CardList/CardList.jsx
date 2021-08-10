import React from "react";
import { Carditem } from "./Carditem";
import { Card_Red } from "../../Reducers/Card_Red";
import { Col } from "react-bootstrap";
import "./Card-style.css";

export const CardList = () => {
  return (
    <div className="card-container row">
        
        
        {Card_Red.Data.map((item) => (
        <Col md={4}>
        <Carditem item={item} />
        </Col>
      ))}
    </div>
  );
};
