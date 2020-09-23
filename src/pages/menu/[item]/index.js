import React from 'react';
import styles from './index.module.css';
import { useRouter } from 'next/router';
import Header from '../../../components/header/Header';
import Overlay from '../../../components/overlay/Overlay';
import SubNav from '../../../components/menu-components/sub-nav/SubNav';
import Items from '../../../components/menu-components/items/Items';
import MenuButton from '../../../components/menu-components/menu-button/MenuButton';
import SmallMenu from '../../../components/menu-components/small-menu/SmallMenu';
import Main from '../../../components/menu-components/main/Main';

import { NavbarMobileProvider } from '../../../context/navbar-mobile-context/navbar-mobile-context';
import { SmallMenuButtonProvider } from '../../../context/smallmenu-button-context/smallmenu-button-context';

export default function index() {
  const router = useRouter();
  const { item } = router.query;
  const path = router.pathname;
  return (
    <>
      <SmallMenuButtonProvider>
        <NavbarMobileProvider>
          <Overlay smallMenuFlag={true} />
          <Header />
        </NavbarMobileProvider>
        <Main>
          <SubNav item={item} />
          <Items item={item} />
          <MenuButton />
          <SmallMenu />
        </Main>
      </SmallMenuButtonProvider>
    </>
  );
}
