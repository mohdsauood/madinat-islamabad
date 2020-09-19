import React from 'react';
import NavbarMobile from '../nav/navbar-mobile/NavbarMobile';
import NavbarDesktop from '../nav/navbar-desktop/NavbarDesktop';
import SidenavMobile from '../nav/sidenav-mobile/sidenavMobile';
export default function Header() {
  return (
    <header>
      <NavbarMobile />
      <NavbarDesktop />
      <SidenavMobile />
    </header>
  );
}
