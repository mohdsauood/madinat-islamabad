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
          Madinat Islamabad has perfected the ‘Dum Pukht’ style of cooking where
          food is cooked on low flame, trapping all the natural flavours inside,
          resulting in fragrantly delicious dishes.
        </h1>
      </Container>
    </Jumbotron>
  );
}
