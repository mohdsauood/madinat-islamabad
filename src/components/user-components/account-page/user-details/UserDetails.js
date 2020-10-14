import React from 'react';
import styles from './UserDetails.module.css';
export default function UserDetails() {
  return (
    <div className={styles.div}>
      <h6 className={`${styles.h6} xtUpperCase xtM xtBold`}>Mohamed sauood</h6>
      <p className={`${styles.p} xtM xtM`}>
        0561222712{' '}
        <span className={`${styles.span} xkarla xtBold xtSm xtUpperCase`}>
          edit
        </span>
      </p>
    </div>
  );
}
