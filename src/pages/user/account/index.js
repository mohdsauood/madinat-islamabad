import React from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import UserDetails from '../../../components/user-components/account-page/user-details/UserDetails';
import PastOrders from '../../../components/user-components/account-page/past-orders/PastOrders';
import Options from '../../../components/user-components/account-page/options/Options';
export default function index() {
  return (
    <>
      <Header />
      <UserDetails />
      <Options />
      <PastOrders />
    </>
  );
}
