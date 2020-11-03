import React from 'react';
import styles from './Items.module.css';
import Item from '../item/Item';
import PropTypes from 'prop-types';

const dummyData = {
  description:
    'Chapati is an Indian flat bread prepared with simple whole wheat flour, salt, and water.',
  price: '4',
  imgUrl: '/assets/paratha.jpg',
};
export default function Items({ item }) {
  let names = [];
  if (item !== 'Undefined') {
    names.push(`tandoori chicken ${item}`);
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

Items.propTypes = {
  item: PropTypes.string.isRequired,
};
