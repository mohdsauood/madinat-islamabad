import React from 'react';
import styles from './index.module.css';
import Header from '../../components/header/Header';
import Title from '../../components/order-page/title/Title';
import Address from '../../components/order-page/address/Address';
import Date from '../../components/order-page/date/Date';
import Bill from '../../components/order-page/bill/Bill';
import Overlay from '../../components/overlay/Overlay';
export default function index() {
  return (
    <>
      <Overlay />
      <Header />
      <Title />
      <Address />
      <Date />
      <Bill />
    </>
  );
}
