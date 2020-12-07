import React from 'react';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import Header from '../../components/header/Header';
import Overlay from '../../components/overlay/Overlay';
import About from '../../components/about-us-page/about/About';
import OurStory from '../../components/about-us-page/our-story/OurStory';
import Footer from '../../components/footer/Footer';
import AddressFooter from '../../components/about-us-page/address-footer/AddressFooter';
import { NextSeo } from 'next-seo';
export default function index() {
  return (
    <>
      <NextSeo {...seo} />
      <Header />
      <Overlay />
      <BreadCrumbs
        path={[{ name: 'home', path: '/' }]}
        currentPage={{ name: 'About' }}
      />
      <About />
      <OurStory />
      <AddressFooter />
      <Footer />
    </>
  );
}

const seo = {
  title: 'Madinat Islamabad Sharjah | About us',
  description: `Madinat islamabad is a result of family's passion for food and mouth watering authentic pakistani/indian recipes prepared with dedication and love`,
};
