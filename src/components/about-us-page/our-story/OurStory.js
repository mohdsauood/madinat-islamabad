import React from 'react';
import styles from './OurStory.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
export default function OurStory() {
  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h3 className={styles.title}>Our Story</h3>
          <p className={styles.content}>
            In light of the recent Coronavirus (COVID-19) outbreak, rest assured
            that Madinat islamabad is taking every step possible to ensure the
            safety of our customers, personnel and delivery partners.
            <br />
            <br />
            Since inception, high food quality and hygiene standards have always
            taken centre stage at madinat islamabad sharjah. We believe in
            quality assurance and have implemented stringent food safety values
            and quality controls in our restaurant.
            <br />
            <br />
            Madinat islamabad is a result of family's passion for food and mouth
            watering authentic pakistani/indian recipes prepared with dedication
            and love.
            <br />
            <br />
            We pride ourselves on creating authentic food and an experience that
            will leave an imprint on our guests who order food or come to visit
            us . Our recipe for success is simple – prepare our food with love
            and treat our customers like family, giving them the most authentic
            experience that is second to none.
          </p>
        </Col>
        <Col xs={12} md={6}>
          <Image
            src="/assets/hotel.JPG"
            alt="restaurant dining area"
            layout="responsive"
            width="500"
            height="500"
          />
        </Col>
      </Row>
    </Container>
  );
}
