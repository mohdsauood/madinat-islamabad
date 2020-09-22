import React from 'react';
import styles from './MenuButton.module.css';
import { useSmallMenuButton } from '../../../context/smallmenu-button-context/smallmenu-button-context';

export default function MenuButton() {
  const { handleShowSmallMenu } = useSmallMenuButton();
  return (
    <button
      onClick={handleShowSmallMenu}
      className={`${styles.menuBtn} btn btnPrimary btnBlue`}>
      Menu
    </button>
  );
}
