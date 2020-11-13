import React from 'react';
import styles from './AddressFields.module.css';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';

export default function AddressFields() {
  const [address, setAddress] = useState({
    name: null,
    area: null,
    street: null,
    doorNo: null,
    landMark: null,
  });
  return (
    <>
      <h5 className="text-center font-weight-bold mb-1">Add Address Details</h5>
      <Form className="px-3">
        <Form.Group controlId="area">
          <Form.Label>AREA</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="doorNo">
          <Form.Label>HOUSE/FLAT/BLOCK NO</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="street">
          <Form.Label>STREET</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="landmark">
          <Form.Label>LANDMARK</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Label>SAVE AS</Form.Label>
          <div className="d-flex justify-content-between">
            <Form.Check inline label="home" type="radio" id="home" />
            <Form.Check inline label="work" type="radio" id="work" />
            <Form.Check inline label="other" type="radio" id="other" />
          </div>
        </Form.Group>
        <Button className={styles.submitBtn} variant="primary" type="submit">
          Save and Proceed
        </Button>
      </Form>
    </>
  );
}
