import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './Address.module.css';
export default function Address() {
  return (
    <Container className="d-flex mt-1">
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24">
        <path d="M12 0c-3.148 0-6 2.553-6 5.702 0 3.148 2.602 6.907 6 12.298 3.398-5.391 6-9.15 6-12.298 0-3.149-2.851-5.702-6-5.702zm0 8c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2zm8 12c0 2.209-3.581 4-8 4s-8-1.791-8-4c0-1.602 1.888-2.98 4.608-3.619l1.154 1.824c-.401.068-.806.135-1.178.242-3.312.949-3.453 2.109-.021 3.102 2.088.603 4.777.605 6.874-.001 3.619-1.047 3.164-2.275-.268-3.167-.296-.077-.621-.118-.936-.171l1.156-1.828c2.723.638 4.611 2.016 4.611 3.618z" />
      </svg>
      <Card className="border-0 ">
        <Card.Body className="pt-0">
          <Card.Title className="xtBlack">Home</Card.Title>
          <Card.Text className="mb-2 text-muted">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link as={Button} className={styles.btn}>
            edit
          </Card.Link>
          <Card.Link as={Button} className={styles.btn}>
            delete
          </Card.Link>
        </Card.Body>
      </Card>
    </Container>
  );
}
