import styles from './Overlay.module.css';
import { useState } from 'react';
import { useNavbarMobile } from '../../context/navbar-mobile-context/navbar-mobile-context';

export default function Overlay() {
  const { showMenu, handleShowMenu } = useNavbarMobile();
  return (
    <div
      onClick={handleShowMenu}
      className={showMenu ? styles.overlayVisible : styles.overlayHidden}></div>
  );
}
