import React, { useEffect } from 'react';
import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import { useSession } from 'next-auth/client';
import { useCartDispatch } from '../context/cart-provider-context/cart-provider-context';
import getUserType from '../utils/getUserType';

export default function Home() {
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
      <Main />
      <Footer />
    </>
  );
}
