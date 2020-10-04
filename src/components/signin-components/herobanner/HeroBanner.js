import React from 'react';
import styles from './HeroBanner.module.css';
import PropTypes from 'prop-types';

export default function HeroBanner({ styless }) {
  const { color, text } = styless;
  return (
    <div style={{ backgroundColor: color }} className={styles.div}>
      <h3 className={`${styles.h3} tCapitalize`}>{text}</h3>
    </div>
  );
}

HeroBanner.propTypes = {
  styless: PropTypes.object.isRequired,
};
