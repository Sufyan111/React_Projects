import React from "react";
import { Col, Row } from "react-bootstrap";
import { Search } from "../A_Search/Search";
import { Pronunciation } from "../B_Pronunciation/Pronunciation";
import { Meaning } from "../C_Meaning/Meaning";
import { Synonym } from "../D_Synonyms/Synonym";

export const Landing = () => {
  return (
    <div>
      <div className="search">
        <Search />
      </div>

      <div className="pronunciation">
        <Row>
          <Col md={2}></Col>
          <Col md={3}>
            <Pronunciation />
          </Col>
        </Row>
      </div>
        <br /><br />
      <div className="meaning">
        <Row>
          <Col md={2}></Col>
          <Col md={5}>
            <Meaning />
          </Col>
          <Col md={2}>
            
            <Synonym />
          </Col>
        </Row>
      </div>
    </div>
  );
};
