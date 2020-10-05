import React from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import SubHeroSection from '../../components/offers-component/subhero-section/SubHeroSection';
import Coupons from '../../components/offers-component/coupons/Coupons';
export default function index() {
  return (
    <>
      <TitleHeader title="offers" />
      <SubHeroSection />
      <Coupons />
    </>
  );
}
