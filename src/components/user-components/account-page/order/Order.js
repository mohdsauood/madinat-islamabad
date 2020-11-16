import React from 'react';
import styles from './Order.module.css';
import PropTypes from 'prop-types';
import Link from 'next/link';

export default function Order({ item }) {
  return (
    <div className={styles.mainDiv}>
      <div className={styles.priceDiv}>
        <p className={`${styles.combo} xtM`}>{item.name}</p>
        <span className={`${styles.delivered} xkarla xtSm`}>
          {item.delivered ? 'delivered' : 'unknown'}
        </span>
      </div>
      <Link href={`/order-success/${encodeURIComponent(item.id)}`}>
        <p className={`${styles.price} xtSm `}>
          {item.price} AED
          <svg
            className={styles.arrow}
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 24 24">
            <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
          </svg>
        </p>
      </Link>
      <p className={`${styles.date} xtSm`}>{item.date}</p>
      <div className={`${styles.buttonDiv} xtSm`}>
        <button className={`${styles.btn} ${styles.btn2} xbtn xbtnOutline`}>
          reorder
        </button>{' '}
        <button className={`${styles.btn} xbtn xbtnPrimary`}>
          <a
            href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TEoqLzAxNsw2YLRSNagwTjVNM01KSTIxMEtOMTBNszKoMAFyk4ySzM1NzNOMzS2SvQRzE1My8xJLFDKLcxJzE5MSUwAK0xZQ&q=madinat+islamabad&rlz=1C1CHBF_enIN836IN836&oq=madinat+islamabad&aqs=chrome.1.69i57j46i39i175i199j69i59j69i60l3.4261j0j7&sourceid=chrome&ie=UTF-8#lrd=0x3e5f5bdb406cd05f:0x4bdbb2b7747f378c,3,,,"
            target="_blank">
            rate us
          </a>
        </button>
      </div>
    </div>
  );
}

Order.propTypes = {
  item: PropTypes.object,
};

Order.defaultProps = {
  item: {
    name: 'COMBO1 X 2, pepsi 1',
    delivered: 'Delivered',
    date: 'febrauary 4 , 12:11pm',
    price: '12 aed',
  },
};
