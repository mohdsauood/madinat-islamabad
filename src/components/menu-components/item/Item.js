import React from 'react';
import styles from './Item.module.css';
export default function Item({ foodItem }) {
  console.log(foodItem.imgUrl);
  return (
    <section className={styles.itemSec}>
      <div className={styles.itemSec__div}>
        <h4 className={styles.itemSec__div__h4}>{foodItem.name}</h4>
        <p className={styles.itemSec__div__p}>{foodItem.description}</p>
        <span className={styles.itemSec__div__span}>{foodItem.price}</span>
      </div>
      <div
        className={styles.itemSec__btnDiv}
        style={{ backgroundImage: `url(${foodItem.imgUrl})` }}>
        <button className={`${styles.itemSec__btnDiv__btn} btn btnPrimary`}>
          Add
        </button>
      </div>
    </section>
  );
}
