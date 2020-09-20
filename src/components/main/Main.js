import React from 'react';
import HeroSection from '../hero-section/HeroSection';
import CouponProductSection from '../coupon-product-section/CouponProductSection';
import AddToHomeSection from '../add-to-home-section/AddToHomeSection';
import SocialSection from '../social-section/SocialSection';
export default function Main() {
  return (
    <main>
      <HeroSection />
      <CouponProductSection />
      <AddToHomeSection />
      <SocialSection />
    </main>
  );
}
