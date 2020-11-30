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
    'deserts',
    'rice',
    'combos',
    'kebab',
  ].map((elem) => {
    const refProp = {};
    if (elem == item) {
      refProp.ref = activeLi;
    }
    return (
      <li
        key={elem}
        className={
          elem == item
            ? `${styles.nav__ul__li} ${styles.activeLi}`
            : `${styles.nav__ul__li}`
        }
        {...refProp}>
        <Link href={`/menu/${encodeURIComponent(elem)}`}>
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
