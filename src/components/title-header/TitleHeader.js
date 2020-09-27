import React from 'react';
import styles from './TitleHeader.module.css';

import { useRouter } from 'next/router';

export default function TitleHeader({ title }) {
  const router = useRouter();
  return (
    <div className={styles.div}>
      <svg
        onClick={() => router.back()}
        className="svgBlack"
        transform="rotate(180)"
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24">
        <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
      </svg>
      <h4 className={`${styles.title} tBlack  tUpperCase tXlg`}>{title}</h4>
    </div>
  );
}
