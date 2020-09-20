import React from 'react';
import styles from './SocialSection.module.css';

export default function SocialSection() {
  return (
    <section className={styles.socialSec}>
      <p className={styles.socialSec__p}>
        follow our social media to see exclusive offers
      </p>
      <section className={styles.socialSec__iconsDiv}>
        <div className={styles.socialSec__iconsDiv__subDiv}>
          <i className={`fab fa-facebook-square ${styles.fbIcon} fa-2x`}></i>
          <p className={styles.socialSec__iconsDiv__subDiv_p}>
            fb/Madinat.islamabad
          </p>
        </div>
        <div className={styles.socialSec__iconsDiv__subDiv}>
          <i className={`fab fa-snapchat-square ${styles.scIcon} fa-2x`}></i>
          <p className={styles.socialSec__iconsDiv__subDiv_p}>
            Sc: madinatislamabad
          </p>
        </div>
        <div className={styles.socialSec__iconsDiv__subDiv}>
          <i className={`fab fa-instagram-square ${styles.igIcon} fa-2x`}></i>
          <p className={styles.socialSec__iconsDiv__subDiv_p}>
            @Madinatislamabad
          </p>
        </div>
      </section>
    </section>
  );
}
