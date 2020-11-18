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
            Family-built from day one, Bait Al Mandi Restaurant opened its doors
            in 2001 and has been serving traditional homemade Arabic cuisine to
            rave reviews in the UAE ever since.
            <br />
            <br />
            It is a result of family’s passion for food and mouth-watering
            authentic Arabic recipes traditionally prepared with dedication and
            love.
            <br />
            <br />
            Our Mandi became famous and since then, we have been one of the most
            highly acclaimed homegrown brand in the UAE food industry and been
            recognized as UAE’s most-loved Mandi food chain.
            <br />
            <br />
            We pride ourselves on creating authentic food and an experience that
            will leave an imprint on our guests who come to visit us, not only
            by our food but by our traditions. Our recipe for success is simple
            – prepare our food with love and treat our customers like family,
            giving them the most authentic Arabic cuisine experience that is
            second to none.
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
