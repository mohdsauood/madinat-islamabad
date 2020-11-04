import React from 'react';
import styles from './Bill.module.css';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
export default function Bill() {
  const cartState = useCartState();
  const { user } = cartState;
  const order = user.orders && user.orders[user.orders.length - 1];
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
          {order &&
            order.items.map((item) => {
              return (
                <ListGroup.Item className="d-flex justify-content-between border-0 px-2 py-1 xtBlack">
                  {item.name} X {item.quantity} <span>{item.price} AED</span>
                </ListGroup.Item>
              );
            })}
        </ListGroup>
      </Container>
      <Container className="mt-3">
        <ListGroup variant="flush">
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            Item Total <span>{order && order.bill.total} AED</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            Delivery Fee{' '}
            <span>{(order && order.bill.deliveryFee) || 0} AED</span>
          </ListGroup.Item>
          <ListGroup.Item className="d-flex justify-content-between  px-2  xtBlack">
            To Pay{' '}
            <span className="font-weight-bold">
              {order && order.bill.toPay} AED
            </span>
          </ListGroup.Item>
        </ListGroup>
      </Container>
      <button className={`${styles.btn} xbtn xbtnOutline `}>REORDER</button>
    </>
  );
}
