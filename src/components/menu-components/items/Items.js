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
export default function Items({ item, menu }) {
  let items = menu.map((item) => <Item menuItem={item} key={item.name} />);
  return <section className={styles.itemsSec}>{item && items}</section>;
}

Items.propTypes = {
  item: PropTypes.string.isRequired,
};
