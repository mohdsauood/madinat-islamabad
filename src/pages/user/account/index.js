import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import UserDetails from '../../../components/user-components/account-page/user-details/UserDetails';
import PastOrders from '../../../components/user-components/account-page/past-orders/PastOrders';
import Options from '../../../components/user-components/account-page/options/Options';
import NumberModal from '../../../components/cart/number-modal/NumberModal';
import Overlay from '../../../components/overlay/Overlay';
import ProtectedRoute from '../../../utils/ProtectedRoute';
export default function index() {
  return (
    <>
      <ProtectedRoute>
        <Overlay />
        <Header />
        <div className={styles.div}>
          <UserDetails />
          <Options />
          <PastOrders />
        </div>
        <NumberModal />
      </ProtectedRoute>
    </>
  );
}
