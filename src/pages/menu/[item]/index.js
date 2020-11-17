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

export default function index() {
  const router = useRouter();
  const { item } = router.query;
  const path = router.pathname;

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
