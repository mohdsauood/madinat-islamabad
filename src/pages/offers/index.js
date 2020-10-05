import React from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import SubHeroSection from '../../components/offers-component/subhero-section/SubHeroSection';
import Coupons from '../../components/offers-component/coupons/Coupons';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
export default function index() {
  return (
    <>
      <NavbarDesktop />
      <TitleHeader title="offers" />
      <SubHeroSection />
      <Coupons />
    </>
  );
}
