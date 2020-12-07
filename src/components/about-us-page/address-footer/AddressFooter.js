import React from 'react';
import styles from './AddressFooter.module.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Link from 'next/link';
export default function AddressFooter() {
  return (
    <Container className={styles.container}>
      <Row>
        <Col xs={5} md={2}>
          <Image
            layout="intrinsic"
            src="/assets/address-logo.png"
            alt="Restaurant Logo"
            width={410}
            height={135}
            quality={100}
          />
        </Col>
        <Col xs={7} md={12}>
          <h4 className={styles.title}>Address : </h4>
          <p className={styles.addressContent}>
            Opposite Al Minha Medical Center,
            <br />
            Masood Bin Rabee Street,
            <br />
            Abu Shagara,
            <br />
            Sharjah
            <br />
            pincode : 307501
            <br />
            call at : 65598847
          </p>
          <a
            className={styles.link}
            href="https://www.google.com/maps/place/Madina+Islamabad+Restaurant/@25.3380085,55.3910307,17z/data=!3m1!4b1!4m5!3m4!1s0x3e5f5bdb406cd05f:0x4bdbb2b7747f378c!8m2!3d25.3380037!4d55.3932247"
            target="_blank">
            See Location
            <svg
              className={styles.svg}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24">
              <path d="M15 16v5l9-10.062-9-9.938v5c-14.069 1.711-19.348 15.107-10.606 16.981-3.804-2.936 3.251-7.441 10.606-6.981z" />
            </svg>
          </a>
        </Col>
        <Col xs={12} md={12} className="text-center mt-4 font-italic xkarla">
          For Any Queries , You Can Email Us At
          <strong> help@madinatislamabad.com</strong>
        </Col>
        <Col
          xs={12}
          md={12}
          lg={12}
          className="text-center mt-4 font-italic xkarla">
          <Navbar bg="light">
            <Nav className={`mx-auto ${styles.linkNav} `}>
              <Nav.Link as="span">
                <Link href="/about">About Us</Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link href="/privacy-policy">Privacy Policy</Link>
              </Nav.Link>
              <Nav.Link as="span">
                <Link href="/terms-of-service">Terms Of Service</Link>
              </Nav.Link>
            </Nav>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
}
