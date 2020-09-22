import React from 'react';
import styles from './index.module.css';
import Header from '../../../components/header/Header';
import Overlay from '../../../components/overlay/Overlay';
import SubNav from '../../../components/menu-components/sub-nav/SubNav';
import Items from '../../../components/menu-components/items/Items';

import { NavbarMobileProvider } from '../../../context/navbar-mobile-context/navbar-mobile-context';
import { useRouter } from 'next/router';

export default function index() {
  const router = useRouter();
  const { item } = router.query;

  return (
    <>
      <NavbarMobileProvider>
        <Overlay />
        <Header />
      </NavbarMobileProvider>
      <SubNav item={item} />
      <Items item={item} />
    </>
  );
}
