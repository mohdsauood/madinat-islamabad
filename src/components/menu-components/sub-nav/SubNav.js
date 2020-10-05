import React, { useEffect, useRef } from 'react';
import styles from './SubNav.module.css';
import Link from 'next/link';
import PropTypes from 'prop-types';
export default function SubNav({ item }) {
  const activeLi = useRef(null);

  let items = [
    'roti',
    'gravies',
    'biriyani',
    'offers',
    'deserts',
    'rice',
    'combos',
    'kebab',
  ].map((elem) => {
    if (elem == item) {
      return (
        <li
          key={elem}
          className={
            elem == item
              ? `${styles.nav__ul__li} ${styles.activeLi}`
              : `${styles.nav__ul__li}`
          }
          ref={activeLi}>
          <Link href={`/menu/${encodeURIComponent(elem)}`}>
            <a> {elem}</a>
          </Link>
        </li>
      );
    }
    return (
      <li key={elem} className={styles.nav__ul__li}>
        <Link
          href={
            elem !== 'offers' ? `/menu/${encodeURIComponent(elem)}` : '/offers'
          }>
          <a> {elem}</a>
        </Link>
      </li>
    );
  });
  useEffect(() => {
    activeLi.current?.scrollIntoView();
  }, [item]);

  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__ul}>{items}</ul>
    </nav>
  );
}

SubNav.propTypes = {
  item: PropTypes.string.isRequired,
};
