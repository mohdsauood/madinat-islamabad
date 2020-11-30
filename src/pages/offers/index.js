import React from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import SubHeroSection from '../../components/offers-component/subhero-section/SubHeroSection';
import Coupons from '../../components/offers-component/coupons/Coupons';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
export default function index() {
  return (
    <>
      <NavbarDesktop />
      <BreadCrumbs
        path={[
          { name: 'home', path: '/' },
          { name: 'menu', path: '/menu/paratha' },
        ]}
        currentPage={{ name: 'offers' }}
      />
      <TitleHeader title="offers" />
      <SubHeroSection />
      <Coupons />
    </>
  );
}
