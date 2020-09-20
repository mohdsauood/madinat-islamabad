import React from 'react';
import styles from './CouponSection.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

export default function CouponSection() {
  return (
    <section className={styles.sliderSection}>
      <Swiper
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination>
        <SwiperSlide>
          <div className={`swiper-slide ${styles.slide1}`}>
            <h5 className={styles.slide1__h5}>super saver deals</h5>
            <p className={styles.slide1__p}>50% on Mutton Haleem</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <div className={`swiper-slide ${styles.slide2}`}>
            <h5 className={styles.slide1__h5}>whatup</h5>
            <p className={styles.slide1__p}>see you there</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
