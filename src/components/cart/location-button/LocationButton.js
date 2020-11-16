import React, { useEffect } from 'react';
import { SHOW_ADDRESS_MODAL } from '../../../context/types/types';
import styles from './LocationButton.module.css';
import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
import { useCartPageUiDispatch } from '../../../context/cart-page-ui-context/cart-page-ui-context';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const variants = {
  open: {
    x: [30, -30, 20, -20],
    transition: {
      type: 'spring',
      delay: 0.1,
    },
  },
  closed: {
    x: 0,
  },
};
export default function LocationButton({ noAddress }) {
  const cartState = useCartState();
  const cartDispatch = useCartPageUiDispatch();
  const { selectedAddress } = cartState;
  const router = useRouter();

  const handleShowAddress = () => {
    cartDispatch({ type: SHOW_ADDRESS_MODAL });
  };
  const handleRouting = () => {
    router.push('/address');
  };
  return (
    <motion.section
      animate={noAddress ? 'open' : 'closed'}
      variants={variants}
      onClick={selectedAddress ? handleShowAddress : handleRouting}
      className={styles.sec}>
      <div className={styles.iconDiv}>
        <svg
          className={styles.svg}
          width="55"
          height="49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path stroke="#C4C4C4" d="M.5 6.5h49v42H.5z" />
          <path
            d="M25 13c-5.2475 0-10 4.2538-10 9.5025C15 30.3062 22.9713 31.1313 25 43c2.0288-11.8687 10-12.6938 10-20.4975C35 17.2538 30.2487 13 25 13zm0 13.75c-2.0712 0-3.75-1.6788-3.75-3.75s1.6775-3.75 3.75-3.75 3.75 1.6788 3.75 3.75-1.6788 3.75-3.75 3.75z"
            fill="#474747"
          />
          <path fill="#fff" d="M41 0h14v14H41z" />
          <path
            d="M48 0c-3.8658 0-7 3.13425-7 7 0 3.8657 3.1342 7 7 7 3.8657 0 7-3.1343 7-7 0-3.86575-3.1343-7-7-7zm-1.1427 9.91667l-2.6251-2.51942.8138-.83708 1.7967 1.71325 4.0955-4.19009.8295.82192-4.9104 5.01142z"
            fill="#09AC19"
          />
        </svg>
        <div className={styles.addressDiv}>
          <p className="xtBlack xtCapitalize ">
            {selectedAddress ? selectedAddress.area : 'choose address'}
          </p>
          <p className="xtGray xtSm">
            {selectedAddress ? selectedAddress.name : 'none'}
          </p>
        </div>
      </div>

      <span className={`${styles.changeSpan} xtPrimary`}>
        {selectedAddress ? 'CHANGE' : 'ADD'}
      </span>
    </motion.section>
  );
}
