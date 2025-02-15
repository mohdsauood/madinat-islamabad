import React from 'react';
import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import getTime from '../utils/getTime';
import fetchMenu from '../utils/fetch-from-strapi/fetchMenu';
import AddressFooter from '../components/about-us-page/address-footer/AddressFooter';
import moment from 'moment-timezone';
export default function Home({ menu, coupons }) {
  return (
    <>
      <Overlay />
      <Header />
      <Main menu={menu} coupons={coupons} />
      <AddressFooter />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const currentTime = moment().tz('Asia/Dubai');
  const time = getTime();
  const menu = await fetchMenu(
    `restaurant-menus?time_eq=${time}&category_eq=top-products`
  );
  const coupons = await fetchMenu(`coupons?time_eq=${time}`);
  return {
    props: { menu, coupons },
  };
}
