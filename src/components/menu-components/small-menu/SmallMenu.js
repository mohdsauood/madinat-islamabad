import React from 'react';
import styles from './SmallMenu.module.css';
import { useSmallMenuButton } from '../../../context/smallmenu-button-context/smallmenu-button-context';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function SmallMenu({ item }) {
  const { showSmallMenu, handleShowSmallMenu } = useSmallMenuButton();
  const visibleState = showSmallMenu
    ? `${styles.smallMenuSec} ${styles.show}`
    : `${styles.hide}`;
  return (
    <section className={visibleState}>
      <ul className={styles.smallMenuSec__ul} onClick={handleShowSmallMenu}>
        <li
          className={
            item == 'roti'
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href="/menu/roti">
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>Roti</p>
              <p>4</p>
            </a>
          </Link>
        </li>
        <li
          className={
            item == 'gravies'
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href="/menu/gravies">
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>gravies</p>
              <p>1</p>
            </a>
          </Link>
        </li>
        <li
          className={
            item == 'biriyani'
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href="/menu/biriyani">
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>biriyani</p>
              <p>3</p>
            </a>
          </Link>
        </li>
        <li
          className={
            item == 'deserts'
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href="/menu/deserts">
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>deserts</p>
              <p>1</p>
            </a>
          </Link>
        </li>
        <li
          className={
            item == 'rice'
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href="/menu/rice">
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>rice</p>
              <p>1</p>
            </a>
          </Link>
        </li>
        <li
          className={
            item == 'kebab'
              ? `${styles.smallMenuSec__ul__li} ${styles.currentItem}`
              : styles.smallMenuSec__ul__li
          }>
          <Link href="menu/kebab">
            <a className={styles.smallMenuSec__ul__li__a}>
              <p>kebab</p>
              <p>3</p>
            </a>
          </Link>
        </li>
      </ul>
    </section>
  );
}

SmallMenu.propTypes = {
  item: PropTypes.string.isRequired,
};
