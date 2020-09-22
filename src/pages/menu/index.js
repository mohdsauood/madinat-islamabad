import React from 'react';
import styles from './index.module.css';
import Header from '../../components/header/Header';
import Overlay from '../../components/overlay/Overlay';
import SubNav from '../../components/menu-components/sub-nav/SubNav';

import { NavbarMobileProvider } from '../../context/navbar-mobile-context/navbar-mobile-context';

export default function index() {
  return (
    <>
      <NavbarMobileProvider>
        <Overlay />
        <Header />
      </NavbarMobileProvider>
      <SubNav />
    </>
  );
}
