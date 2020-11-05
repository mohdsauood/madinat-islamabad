import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../components/header/Header';
import Title from '../../components/order-page/title/Title';
import Address from '../../components/order-page/address/Address';
import Date from '../../components/order-page/date/Date';
import Bill from '../../components/order-page/bill/Bill';
import Overlay from '../../components/overlay/Overlay';
import {
  useCartState,
  useCartDispatch,
} from '../../context/cart-provider-context/cart-provider-context';
import { useSession } from 'next-auth/client';
import getUserType from '../../utils/getUserType';
import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter();
  const { id } = router.query;
  const [session] = useSession();
  const cartDispatch = useCartDispatch();
  const cartState = useCartState();
  const { user } = cartState;
  const { orders } = user;
  const orderArray = orders && orders.filter((order) => order._id == id);
  const specificOrder = orders && orderArray[0];
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
      <Title specificOrder={specificOrder} />
      <Address specificOrder={specificOrder} />
      <Date specificOrder={specificOrder} />
      <Bill specificOrder={specificOrder} />
    </>
  );
}
