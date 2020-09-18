import styles from './Overlay.module.css';
import { useState } from 'react';
export default function Overlay({ initialValue }) {
  const [visible, setVisible] = useState(initialValue);
  return (
    <div
      className={visible ? styles.overlayVisible : styles.overlayHidden}></div>
  );
}
