import React from 'react';
import styles from './About.module.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
export default function About() {
  return (
    <Jumbotron fluid className={styles.contain}>
      <Container>
        <h2 className={styles.title}>About Us</h2>
        <h1 className={styles.content}>
          “Bait Al Mandi is not only the first Mandi restaurant chain in the
          UAE, it is also the most popular”
        </h1>
      </Container>
    </Jumbotron>
  );
}
