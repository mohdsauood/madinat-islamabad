import React from 'react';
import styles from './SmallMenu.module.css';
import { useSmallMenuButton } from '../../../context/smallmenu-button-context/smallmenu-button-context';

export default function SmallMenu() {
  const { showSmallMenu } = useSmallMenuButton();
  const visibleState = showSmallMenu
    ? `${styles.smallMenuSec} ${styles.show}`
    : `${styles.hide}`;
  return (
    <section className={visibleState}>
      <ul className={styles.smallMenuSec__ul}>
        <li className={styles.smallMenuSec__ul__li}>
          <p>Roti</p>
          <p>4</p>
        </li>
        <li className={styles.smallMenuSec__ul__li}>
          <p>biriyani</p>
          <p>2</p>
        </li>
        <li className={styles.smallMenuSec__ul__li}>
          <p>Gravies</p>
          <p>4</p>
        </li>
        <li className={styles.smallMenuSec__ul__li}>
          <p>Desert</p>
          <p>3</p>
        </li>
        <li className={styles.smallMenuSec__ul__li}>
          <p>Combos</p>
          <p>5</p>
        </li>
        <li className={styles.smallMenuSec__ul__li}>
          <p>Offers</p>
          <p>5</p>
        </li>
        <li className={styles.smallMenuSec__ul__li}>
          <p>bbq</p>
          <p>1</p>
        </li>
      </ul>
    </section>
  );
}
