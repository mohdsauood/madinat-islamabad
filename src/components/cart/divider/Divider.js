import React from 'react';
import styles from './Divider.module.css';
export default function Divider({ height }) {
  const styyles = {
    height,
  };
  return <div style={styyles} className={styles.div}></div>;
}
