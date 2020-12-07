import React from 'react';
import styles from './CouponSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { useRouter } from 'next/router';

SwiperCore.use([Pagination, Autoplay]);

export default function CouponSection({ coupons }) {
  const router = useRouter();

  return (
    <section className={styles.sliderSection}>
      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination>
        {coupons.map((coupon) => {
          return (
            <SwiperSlide key={coupon.name}>
              <div
                onClick={() =>
                  coupon.redirect && router.push(`/menu/${coupon.redirect}`)
                }
                style={{ background: `url(${coupon.image})` }}
                className={`swiper-slide ${styles.slideMain}`}>
                <h5 className={styles.slide1__h5}>{coupon.name}</h5>
                <p className={styles.slide1__p}>{coupon.desc}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
}
