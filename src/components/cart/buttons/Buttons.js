import React, { useState } from 'react';
import styles from './Buttons.module.css';
import LocationButton from '../location-button/LocationButton';
import OrderButton from '../order-button/OrderButton';
import Divider from '../divider/Divider';

export default function Buttons() {
  const [noAddress, setNoAddress] = useState(false);
  return (
    <div className={styles.buttonsDiv}>
      <Divider height="0.4rem" />
      <LocationButton noAddress={noAddress} />
      <OrderButton setNoAddress={setNoAddress} />
    </div>
  );
}
