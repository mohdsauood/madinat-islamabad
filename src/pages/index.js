import React from 'react';
import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import getTime from '../utils/getTime';
import fetchMenu from '../utils/fetch-from-strapi/fetchMenu';
export default function Home({ menu }) {
  return (
    <>
      <Overlay />
      <Header />
      <Main menu={menu} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const time = getTime();
  const menu = await fetchMenu(
    `/restaurant-menus?time_eq=${time}&category_eq=top-products`
  );
  return {
    props: { menu },
  };
}
