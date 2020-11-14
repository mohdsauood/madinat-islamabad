import React from 'react';
import styles from './AddressLi.module.css';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import { useCartDispatch } from '../../../context/cart-provider-context/cart-provider-context';
import { UPDATE_SELECTED_ADDRESS } from '../../../context/types/types';
export default function AddressLi({ item, handleClose }) {
  const cartDispatch = useCartDispatch();

  const handleClick = () => {
    cartDispatch({ type: UPDATE_SELECTED_ADDRESS, payload: item.id });
    handleClose();
  };
  return (
    <ListGroup.Item className={styles.li} onClick={handleClick}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24">
        <path d="M12 0c-5.522 0-10 4.395-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.42-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8 8 3.582 8 8-3.581 8-8 8z" />
      </svg>
      <div className={styles.div}>
        <h6 className={`${styles.h6} xtM`}>{item.name}</h6>
        <p className={`${styles.p} xtSm xtGray`}>{item.address}</p>
      </div>
    </ListGroup.Item>
  );
}

AddressLi.propTypes = {
  item: PropTypes.object.isRequired,
};
