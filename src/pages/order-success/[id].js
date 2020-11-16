import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header/Header';
import Title from '../../components/order-page/title/Title';
import Address from '../../components/order-page/address/Address';
import Date from '../../components/order-page/date/Date';
import Bill from '../../components/order-page/bill/Bill';
import Overlay from '../../components/overlay/Overlay';
import { useRouter } from 'next/router';
import ProtectedRoute from '../../utils/ProtectedRoute';
import TitleHeader from '../../components/title-header/TitleHeader';
export default function index() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <ProtectedRoute>
        <Overlay />
        <Header />
        <TitleHeader title="View Order" />
        <Title id={id} />
        <Address id={id} />
        <Date id={id} />
        <Bill id={id} />
      </ProtectedRoute>
    </>
  );
}
