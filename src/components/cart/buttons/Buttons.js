import React from 'react';
import styles from './Buttons.module.css';
import LocationButton from '../location-button/LocationButton';
import OrderButton from '../order-button/OrderButton';
import Divider from '../divider/Divider';

export default function Buttons() {
  return (
    <div className={styles.buttonsDiv}>
      <Divider height="0.4rem" />
      <LocationButton />
      <OrderButton />
    </div>
  );
}
