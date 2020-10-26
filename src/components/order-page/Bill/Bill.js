import React from 'react';
import styles from './Bill.module.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
export default function Bill() {
  return (
    <>
      <Card className="ml-3 mr-3 mt-2 border-0">
        <Card.Body className="p-2">
          <Card.Title className="text-uppercase xtBlack">
            Bill Details
          </Card.Title>
        </Card.Body>
      </Card>
      <Container className="xkarla font-italic xtBlack">
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between border-0 px-2 py-1 xtBlack">
            ghee roti X 1 <span>3 AED</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            chicken korma <span>7 AED</span>
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <Container className="mt-3">
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            Item Total <span>10 AED</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            Delivery Fee <span>1 AED</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            To Pay <span className="font-weight-bold">11 AED</span>
          </ListGroup.Item>
        </ListGroup>
      </Container>
    </>
  );
}
