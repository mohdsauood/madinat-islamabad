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
  console.log(item);
  let names = [];
  if (item !== 'Undefined') {
    names.push(`ghee ${item}`);
    names.push(`plain ${item}`);
    names.push(`${item}`);
  }
  let items = (
    <>
      {' '}
      <Item foodItem={{ name: `${names[0]}`, ...dummyData }} />
      <Item foodItem={{ name: `${names[1]}`, ...dummyData }} />
      <Item foodItem={{ name: `${names[2]}`, ...dummyData }} />
    </>
  );
  return <section className={styles.itemsSec}>{item && items}</section>;
}
