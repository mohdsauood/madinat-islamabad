import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import UserDetails from '../../../components/user-components/account-page/user-details/UserDetails';
import PastOrders from '../../../components/user-components/account-page/past-orders/PastOrders';
import Options from '../../../components/user-components/account-page/options/Options';
import NumberModal from '../../../components/cart/number-modal/NumberModal';
import Overlay from '../../../components/overlay/Overlay';
import ProtectedRoute from '../../../utils/ProtectedRoute';
import BreadCrumbs from '../../../components/bread-crumbs/BreadCrumbs';
import { NextSeo } from 'next-seo';

export default function index() {
  return (
    <>
      <NextSeo {...seo} />
      <ProtectedRoute>
        <Overlay />
        <Header />
        <BreadCrumbs
          path={[{ name: 'home', path: '/' }]}
          currentPage={{ name: 'view-account' }}
        />
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

const seo = {
  title: 'Madinat Islamabad Sharjah | User Account',
  noindex: true,
};
