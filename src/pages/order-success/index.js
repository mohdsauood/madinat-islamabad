import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header/Header';
import Title from '../../components/order-page/title/Title';
import Address from '../../components/order-page/address/Address';
import Date from '../../components/order-page/date/Date';
import Bill from '../../components/order-page/bill/Bill';
import Overlay from '../../components/overlay/Overlay';
import ProtectedRoute from '../../utils/ProtectedRoute';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import { NextSeo } from 'next-seo';

export default function index() {
  return (
    <>
      <NextSeo {...seo} />
      <ProtectedRoute>
        <Overlay />
        <Header />
        <BreadCrumbs
          path={[
            { name: 'home', path: '/' },
            { name: 'menu', path: '/menu/paratha' },
            { name: 'cart', path: '/cart' },
          ]}
          currentPage={{ name: 'order-sucess' }}
        />
        <Title />
        <Address />
        <Date />
        <Bill />
      </ProtectedRoute>
    </>
  );
}

const seo = {
  title: 'Madinat Islamabad Sharjah | Order Details',
  noindex: true,
};
