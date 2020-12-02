import React, { useEffect } from 'react';
import styles from './index.module.css';
import Buttons from '../../components/cart/buttons/Buttons';
import Bill from '../../components/cart/bill/Bill';
import ApplyCoupon from '../../components/cart/apply-coupon/ApplyCoupon';
import AddReq from '../../components/cart/add-req/AddReq';
import Divider from '../../components/cart/divider/Divider';
import CartItems from '../../components/cart/cart-items/CartItems';
import TitleHeader from '../../components/title-header/TitleHeader';
import NavbarDesktop from '../../components/nav/navbar-desktop/NavbarDesktop';
import CouponModal from '../../components/cart/coupon-modal/CouponModal';
import AddressModal from '../../components/cart/address-modal/AddressModal';
import NumberModal from '../../components/cart/number-modal/NumberModal';
import MinimumTotalModal from '../../components/cart/minimum-total-modal/MinimumTotalModal';
import RestoClosedModal from '../../components/cart/resto-closed-modal/RestoClosedModal';
import ProtectedRoute from '../../utils/ProtectedRoute';
import BreadCrumbs from '../../components/bread-crumbs/BreadCrumbs';
import Spinner from 'react-bootstrap/Spinner';
import { useCartPageUiState } from '../../context/cart-page-ui-context/cart-page-ui-context';
export default function index() {
  const { showSpinner } = useCartPageUiState();
  return (
    <>
      <ProtectedRoute>
        <NavbarDesktop />
        <BreadCrumbs
          path={[{ name: 'home', path: '/' }]}
          currentPage={{ name: 'cart' }}
        />
        <TitleHeader title={'Cart'} />
        <div className={styles.div}>
          <CartItems />
          <Divider height={'0.1rem'} />
          <AddReq />
          <Divider height={'0.5rem'} />
          <ApplyCoupon />
          <Divider height={'0.1rem'} />
          <Bill />
          <Buttons />
          <CouponModal />
          <NumberModal />
          <AddressModal />
          <MinimumTotalModal />
          <RestoClosedModal />
          {showSpinner && (
            <div className={styles.spinner}>
              <Spinner animation="border" />
            </div>
          )}
        </div>
      </ProtectedRoute>
    </>
  );
}
