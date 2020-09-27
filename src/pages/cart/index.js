import React from 'react';
import styles from './index.module.css';
import Bill from '../../components/cart/bill/Bill';
import ApplyCoupon from '../../components/cart/apply-coupon/ApplyCoupon';
import AddReq from '../../components/cart/add-req/AddReq';
import Divider from '../../components/cart/divider/Divider';
import CartItems from '../../components/cart/cart-items/CartItems';
import TitleHeader from '../../components/title-header/TitleHeader';
export default function index() {
  return (
    <>
      <TitleHeader title={'Cart'} />
      <CartItems />
      <Divider height={'0.1rem'} />
      <AddReq />
      <Divider height={'0.5rem'} />
      <ApplyCoupon />
      <Divider height={'0.1rem'} />
      <Bill />
    </>
  );
}
