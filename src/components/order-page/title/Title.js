import React from 'react';
import Card from 'react-bootstrap/Card';
import styles from './Title.module.css';
export default function Title() {
  return (
    <Card className="ml-3 mr-3">
      <Card.Body className="p-2">
        <Card.Title className="align-middle xtBlack">
          <svg
            className={`${styles.svg} mr-2`}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24">
            <path d="M22.548 9l.452-2h-5.364l1.364-6h-2l-1.364 6h-5l1.364-6h-2l-1.364 6h-6.184l-.452 2h6.182l-1.364 6h-5.36l-.458 2h5.364l-1.364 6h2l1.364-6h5l-1.364 6h2l1.364-6h6.185l.451-2h-6.182l1.364-6h5.366zm-8.73 6h-5l1.364-6h5l-1.364 6z" />
          </svg>
          ORDER 6387902111
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted d-flex justify-content-between">
          2 items | 30 AED
          <span className={styles.help}>HELP</span>
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}
