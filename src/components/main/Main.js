import React from 'react';
import HeroSection from '../hero-section/HeroSection';
import CouponProductSection from '../coupon-product-section/CouponProductSection';
import AddToHomeSection from '../add-to-home-section/AddToHomeSection';
import SocialSection from '../social-section/SocialSection';
export default function Main({ menu, coupons }) {
  return (
    <main>
      <HeroSection />
      <CouponProductSection menu={menu} coupons={coupons} />
      <AddToHomeSection />
      <SocialSection />
    </main>
  );
}
