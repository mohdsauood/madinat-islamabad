import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import Header from '../../../components/header/Header';
import Overlay from '../../../components/overlay/Overlay';
import SubNav from '../../../components/menu-components/sub-nav/SubNav';
import Items from '../../../components/menu-components/items/Items';
import MenuButton from '../../../components/menu-components/menu-button/MenuButton';
import SmallMenu from '../../../components/menu-components/small-menu/SmallMenu';
import Main from '../../../components/menu-components/main/Main';
import CartSection from '../../../components/menu-components/cart-section/CartSection';
import ViewCartButton from '../../../components/menu-components/viewcart-button/ViewCartButton';
import { useCartDispatch } from '../../../context/cart-provider-context/cart-provider-context';
import { useSession } from 'next-auth/client';
import getUserType from '../../../utils/getUserType';

export default function index() {
  const router = useRouter();
  const { item } = router.query;
  const path = router.pathname;
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
      <Main>
        <SubNav item={item} />
        <Items item={item} />
        <MenuButton />
        <SmallMenu item={item} />
        <ViewCartButton />
        <CartSection />
      </Main>
    </>
  );
}
