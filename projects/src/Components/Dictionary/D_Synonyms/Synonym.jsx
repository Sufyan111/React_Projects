import React from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import './Syn_style.css';

export const Synonym = () => {
    return (
        <div>
            <h5><pre> </pre></h5>
            <Card >
            <div class="card-body">
                <ListGroup variant="flush">
                    <h4>Synonyms</h4>
                    <ListGroup.Item>Synonyms</ListGroup.Item>
                </ListGroup>
            </div>
            </Card>
            <Card class='card-syn'>
            <div class="card-body">
                <ListGroup variant="flush">
                    <h4>Antonyms</h4>
                    <ListGroup.Item>Antonyms</ListGroup.Item>
                </ListGroup>
            </div>
            </Card>
            
        </div>
    );
};

