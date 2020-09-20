import React from 'react';
import styles from './AddToHomeSection.module.css';
export default function AddToHomeSection() {
  return (
    <section className={styles.athSec}>
      <section className={styles.ath__tlSec}>
        <p className={styles.ath__tlSec__p}>
          add our app to
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24">
            <path d="M11 6.999c2.395.731 4.27 2.607 4.999 5.001.733-2.395 2.608-4.269 5.001-5-2.393-.731-4.268-2.605-5.001-5-.729 2.394-2.604 4.268-4.999 4.999zm7 7c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm-6 5.501c1.198.365 2.135 1.303 2.499 2.5.366-1.198 1.304-2.135 2.501-2.5-1.197-.366-2.134-1.302-2.501-2.5-.364 1.197-1.301 2.134-2.499 2.5zm-6.001-12.5c-.875 2.873-3.128 5.125-5.999 6.001 2.876.88 5.124 3.128 6.004 6.004.875-2.874 3.128-5.124 5.996-6.004-2.868-.874-5.121-3.127-6.001-6.001z" />
          </svg>
          <span className={styles.ath__tlSec__span}>home screen</span>
          <br />
          for a much smoother experience
        </p>
        <div className={styles.ath__tlSec__div}>madinat</div>
      </section>
      <button className={`${styles.ath__tlSec__button} btn btnPrimary`}>
        add now
      </button>
    </section>
  );
}
