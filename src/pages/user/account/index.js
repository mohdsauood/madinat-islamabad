import React, { useEffect } from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import UserDetails from '../../../components/user-components/account-page/user-details/UserDetails';
import PastOrders from '../../../components/user-components/account-page/past-orders/PastOrders';
import Options from '../../../components/user-components/account-page/options/Options';
import NumberModal from '../../../components/cart/number-modal/NumberModal';
import { useCartDispatch } from '../../../context/cart-provider-context/cart-provider-context';
import { useSession } from 'next-auth/client';
import getUserType from '../../../utils/getUserType';

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
      <Header />
      <div className={styles.div}>
        <UserDetails />
        <Options />
        <PastOrders />
      </div>
      <NumberModal />
    </>
  );
}
