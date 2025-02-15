import styles from './Overlay.module.css';
import { useState } from 'react';
import { useNavbarMobile } from '../../context/navbar-mobile-context/navbar-mobile-context';
import { useSmallMenuButton } from '../../context/smallmenu-button-context/smallmenu-button-context';

export default function Overlay() {
  const { showMenu, handleShowMenu } = useNavbarMobile();
  const { showSmallMenu, handleShowSmallMenu } = useSmallMenuButton();

  const handleClick = () => {
    if (showMenu) {
      handleShowMenu();
    } else {
      handleShowSmallMenu();
    }
  };
  return (
    <div
      onClick={handleClick}
      className={
        showMenu || showSmallMenu ? styles.overlayVisible : styles.overlayHidden
      }></div>
  );
}
