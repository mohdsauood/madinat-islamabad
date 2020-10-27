import React from 'react';
import styles from './Divider.module.css';
import PropTypes from 'prop-types';
export default function Divider({ height }) {
  const styyles = {
    height,
  };
  return <div style={styyles} className={styles.div}></div>;
}

Divider.propTypes = {
  height: PropTypes.string.isRequired,
};
