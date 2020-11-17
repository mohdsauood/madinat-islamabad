import React from 'react';
import styles from './AddressFields.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import * as yup from 'yup';
import { Formik, Field, ErrorMessage } from 'formik';
import {
  useCartDispatch,
  useCartState,
} from '../../../context/cart-provider-context/cart-provider-context';
import axios from 'axios';
import { useRouter } from 'next/router';
import updateUserFromSession from '../../../utils/updateUserFromSession';
import { getSession } from 'next-auth/client';
const schema = yup.object({
  name: yup.string(),
  area: yup.string().required('Please Enter Your Area'),
  street: yup.string(),
  doorNo: yup
    .string()
    .required('Please Enter Your House No/Door No / Block No'),
  landMark: yup.string(),
});

export default function AddressFields({ geoLocation }) {
  const router = useRouter();
  const cartState = useCartState();
  const { user } = cartState;
  const id = user.id;
  const cartDispatch = useCartDispatch();
  return (
    <>
      <h5 className="text-center font-weight-bold mb-2">Add Address Details</h5>
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          const data = { values, geoLocation, id };
          axios
            .post('/api/user/add-address', data)
            .then(function (response) {
              const {
                data: { data },
              } = response;
              getSession().then((res) => {
                updateUserFromSession(res, cartDispatch);
                router.back();
              });
            })
            .catch(function (error) {
              console.log(error);
            });
        }}
        initialValues={{
          name: 'home',
          area: '',
          street: '',
          doorNo: '',
          landMark: '',
        }}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
        }) => (
          <Form noValidate onSubmit={handleSubmit} className="px-3 mb-4">
            <Form.Group controlId="area">
              <Form.Label>AREA</Form.Label>
              <Form.Control
                type="text"
                name="area"
                value={values.area}
                onChange={handleChange}
                isValid={touched.area && !errors.area}
                isInvalid={!!errors.area}
              />
              <Form.Control.Feedback type="invalid">
                {errors.area}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="doorNo">
              <Form.Label>HOUSE/FLAT/BLOCK NO</Form.Label>
              <Form.Control
                type="text"
                name="doorNo"
                value={values.doorNo}
                onChange={handleChange}
                isValid={touched.doorNo && !errors.doorNo}
                isInvalid={!!errors.doorNo}
              />
              <Form.Control.Feedback type="invalid">
                {errors.doorNo}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="street">
              <Form.Label>STREET (optional)</Form.Label>
              <Form.Control
                type="text"
                name="street"
                value={values.street}
                onChange={handleChange}
                isValid={touched.street && !errors.street}
              />
            </Form.Group>
            <Form.Group controlId="landmark">
              <Form.Label>LANDMARK (optional)</Form.Label>
              <Form.Control
                type="text"
                name="landMark"
                value={values.landMark}
                onChange={handleChange}
                isValid={touched.landMark && !errors.landMark}
              />
            </Form.Group>
            <Form.Group controlId="name">
              <Form.Label>SAVE AS</Form.Label>
              <div className="d-flex justify-content-between">
                <Form.Check
                  inline
                  label="home"
                  type="radio"
                  id="home"
                  name="name"
                  value="home"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="work"
                  type="radio"
                  id="work"
                  name="name"
                  value="work"
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="other"
                  type="radio"
                  id="other"
                  name="name"
                  value="other"
                  onChange={handleChange}
                />
              </div>
            </Form.Group>
            <Button
              className={styles.submitBtn}
              variant="primary"
              type="submit">
              Save and Proceed
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
}
