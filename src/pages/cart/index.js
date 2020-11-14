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
import getUserType from '../../utils/getUserType';
import { useCartDispatch } from '../../context/cart-provider-context/cart-provider-context';
import updateUserFromSession from '../../utils/updateUserFromSession';
import { useSession } from 'next-auth/client';

export default function index() {
  const cartDispatch = useCartDispatch();
  const [session] = useSession();
  useEffect(() => {
    updateUserFromSession(session, cartDispatch);
  }, [session]);

  return (
    <>
      <NavbarDesktop />
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
      </div>
    </>
  );
}
