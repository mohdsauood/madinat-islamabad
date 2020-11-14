import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import styles from './AddressModal.module.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Link from 'next/link';
import { useCartPageUi } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useCart } from '../../../context/cart-provider-context/cart-provider-context';
import { HIDE_ADDRESS_MODAL } from '../../../context/types/types';
import AddressLi from '../address-li/AddressLi.js';
const fakeAddress = [
  {
    name: 'hotel malibu',
    address: `110 Highland Dr
Cortlandt Manor, New York(NY), 10567`,
  },
  { name: 'home', address: `608 Clinton StMarshall, Michigan(MI), 49068` },
  {
    name: 'office',
    address: `2940 S Panorama Dr
Garden City, Utah(UT), 84028`,
  },
];
export default function AddressModal() {
  const [uiState, uiDispatch] = useCartPageUi();
  const [cartState, cartDispatch] = useCart();
  const {
    user: { address },
  } = cartState;
  const formatedAddress =
    address &&
    address.map((address) => {
      let { name, doorNo, area, street, landmark, city } = address;
      return { name, address: `${doorNo}, ${area} ,${street} ${city}` };
    });

  const handleClose = () => {
    uiDispatch({ type: HIDE_ADDRESS_MODAL });
  };

  return (
    <Modal centered show={uiState.showAddressModal} onHide={handleClose}>
      <Modal.Header className={styles.header} closeButton>
        <Modal.Title className={`${styles.title} xtLg`}>
          choose a delivery address
        </Modal.Title>
      </Modal.Header>
      <Container fluid className={'pt-0 pl-0 pr-0'}>
        <ListGroup>
          {formatedAddress &&
            formatedAddress.map((item) => <AddressLi item={item} />)}
          <Link href="/address">
            <ListGroup.Item
              className={`${styles.addBtn}  xtUpperCase d-block w-100`}>
              <svg
                className={styles.svg}
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 24 24">
                <path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z" />
              </svg>
              <span className={`${styles.span} xtM`}>add new address</span>
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </Container>
    </Modal>
  );
}
