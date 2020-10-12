import React from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import UserDetails from '../../../components/user-components/account-page/user-details/UserDetails';
export default function index() {
  return (
    <>
      <Header />
      <UserDetails />
    </>
  );
}
