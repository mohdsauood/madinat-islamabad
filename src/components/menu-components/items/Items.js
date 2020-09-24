import React from 'react';
import styles from './Items.module.css';
import Item from '../item/Item';

const dummyData = {
  description:
    'Chapati is an Indian flat bread prepared with simple whole wheat flour, salt, and water.',
  price: '4 AED',
  imgUrl: '/assets/paratha.jpg',
};
export default function Items({ item }) {
  return (
    <section className={styles.itemsSec}>
      <Item foodItem={{ name: `ghee ${item}`, ...dummyData }} />
      <Item foodItem={{ name: `plain ${item}`, ...dummyData }} />
      <Item foodItem={{ name: item, ...dummyData }} />
    </section>
  );
}
