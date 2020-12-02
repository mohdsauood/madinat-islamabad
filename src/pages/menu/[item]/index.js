import React, { useEffect } from 'react';
import styles from './index.module.css';
import moment from 'moment-timezone';
import { useRouter } from 'next/router';
import Header from '../../../components/header/Header';
import Overlay from '../../../components/overlay/Overlay';
import SubNav from '../../../components/menu-components/sub-nav/SubNav';
import Items from '../../../components/menu-components/items/Items';
import MenuButton from '../../../components/menu-components/menu-button/MenuButton';
import SmallMenu from '../../../components/menu-components/small-menu/SmallMenu';
import Main from '../../../components/menu-components/main/Main';
import CartSection from '../../../components/menu-components/cart-section/CartSection';
import ViewCartButton from '../../../components/menu-components/viewcart-button/ViewCartButton';
import BreadCrumbs from '../../../components/bread-crumbs/BreadCrumbs';
import fetchMenu from '../../../utils/fetch-from-strapi/fetchMenu';
import fetchCategories from '../../../utils/fetch-from-strapi/fetchCategories';
import getTime from '../../../utils/getTime';
export default function index({ menu, categories, categoriesObj }) {
  const router = useRouter();
  const { item } = router.query;
  const path = router.pathname;
  return (
    <>
      <Overlay />
      <Header />
      <BreadCrumbs
        path={[{ name: 'home', path: '/' }]}
        currentPage={{ name: 'menu' }}
      />
      <Main>
        <SubNav item={item} categories={categories} />
        <Items item={item} menu={menu} />
        <MenuButton />
        <SmallMenu item={item} categoriesObj={categoriesObj} />
        <ViewCartButton />
        <CartSection />
      </Main>
    </>
  );
}

export async function getServerSideProps(context) {
  const {
    params: { item },
  } = context;
  const currentTime = moment().tz('Asia/Dubai');
  const time = getTime(currentTime);
  console.log('current time is ' + currentTime);
  console.log(`time is ${time} and item is ${item}`);
  const menu = await fetchMenu(
    `restaurant-menus?time_eq=${time}&category_eq=${item}`
  );
  const categoriesObj = await fetchCategories(
    `restaurant-menus?time_eq=${time}`
  );

  // const menu = await fetchMenu(`/restaurant-menus?category_eq=${item}`);
  // const categoriesObj = await fetchCategories(`/restaurant-menus`);
  const categories = Object.keys(categoriesObj);
  return {
    props: { menu, categories, categoriesObj },
  };
}
