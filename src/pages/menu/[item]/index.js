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
import fetchMenu from '../../../utils/fetchMenu';
export default function index({ data }) {
  const router = useRouter();
  const { item } = router.query;
  const path = router.pathname;
  console.log(data);
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
  let data = await fetchMenu('/restaurant-menus');
  console.log(data);
  if (data == undefined) {
    data = 'none';
  }
  return {
    props: { data },
  };
}
