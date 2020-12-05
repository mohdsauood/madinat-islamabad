import React from 'react';
import TitleHeader from '../../components/title-header/TitleHeader';
import SubHeroSection from '../../components/offers-component/subhero-section/SubHeroSection';
import Coupons from '../../components/offers-component/coupons/Coupons';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import { NextSeo } from 'next-seo';
export default function index() {
  return (
    <>
      <NextSeo {...seo} />
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

const seo = {
  title: 'Madinat Islamabad Sharjah | offers',
  description:
    'Browse through our offers section and avail latest coupons and discounted deals.',
};
