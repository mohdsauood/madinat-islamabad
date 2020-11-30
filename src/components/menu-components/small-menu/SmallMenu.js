import React from 'react';
import styles from './SmallMenu.module.css';
import { useSmallMenuButton } from '../../../context/smallmenu-button-context/smallmenu-button-context';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

export default function SmallMenu({ item, categoriesObj }) {
  const { showSmallMenu, handleShowSmallMenu } = useSmallMenuButton();
  const visibleState = showSmallMenu
    ? `${styles.smallMenuSec} ${styles.show}`
    : `${styles.hide}`;
  const liItems = [];
  for (let category in categoriesObj) {
    liItems.push(
      <>
        <li
          key={uuidv4()}
          className={
            item == category
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href={`/menu/${category}`}>
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>{category}</p>
              <p>{categoriesObj[category]}</p>
            </a>
          </Link>
        </li>
      </>
    );
  }
  return (
    <section className={visibleState}>
      <ul className={styles.smallMenuSec__ul} onClick={handleShowSmallMenu}>
        {liItems}
      </ul>
    </section>
  );
}

SmallMenu.propTypes = {
  item: PropTypes.string.isRequired,
};
