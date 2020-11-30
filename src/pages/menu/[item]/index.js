import React, { useEffect } from 'react';
import styles from './index.module.css';
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
export default function index({ menu }) {
  const router = useRouter();
  const { item } = router.query;
  const path = router.pathname;
  console.log(menu);
  return (
    <>
      <Overlay />
      <Header />
      <BreadCrumbs
        path={[{ name: 'home', path: '/' }]}
        currentPage={{ name: 'menu' }}
      />
      <Main>
        <SubNav item={item} />
        <Items item={item} />
        <MenuButton />
        <SmallMenu item={item} />
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
  // const time = getTime();
  const menu = await fetchMenu(
    `/restaurant-menus?time_eq=breakfast&category_eq=${item}`
  );
  const categoriesData = fetchCategories();
  return {
    props: { menu, categoriesData },
  };
}
