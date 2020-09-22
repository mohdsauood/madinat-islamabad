import React, { useEffect, useRef } from 'react';
import styles from './SubNav.module.css';

export default function SubNav({ item }) {
  const activeLi = useRef(null);

  let items = ['roti', 'gravies', 'biriyani', 'deserts', 'rice', 'kebab'].map(
    (elem) => {
      if (elem == item) {
        console.log(elem);
        return (
          <li
            key={elem}
            className={
              elem == item
                ? `${styles.nav__ul__li} ${styles.activeLi}`
                : `${styles.nav__ul__li}`
            }
            ref={activeLi}>
            {elem}
          </li>
        );
      }
      return (
        <li key={elem} className={styles.nav__ul__li}>
          {elem}
        </li>
      );
    }
  );
  useEffect(() => {
    activeLi.current?.scrollIntoView({ inline: 'start' });
  }, [item]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>{items}</ul>
    </nav>
  );
}
