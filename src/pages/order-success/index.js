import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header/Header';
import Title from '../../components/order-page/title/Title';
import Address from '../../components/order-page/address/Address';
import Date from '../../components/order-page/date/Date';
import Bill from '../../components/order-page/bill/Bill';
import Overlay from '../../components/overlay/Overlay';
import { useCartDispatch } from '../../context/cart-provider-context/cart-provider-context';
import { useSession } from 'next-auth/client';
import getUserType from '../../utils/getUserType';
export default function index() {
  const [session] = useSession();
  const cartDispatch = useCartDispatch();
  useEffect(() => {
    async function fetchUser() {
      if (session && session.user) {
        const userProperties = Object.keys(session.user);
        userProperties.forEach((property) => {
          const type = getUserType(property);
          cartDispatch({ type, payload: session.user[property] });
        });
      }
    }
    fetchUser();
  }, [session]);
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
