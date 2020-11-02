import React from 'react';
import styles from './SidenavMobile.module.css';
import Link from 'next/link';

import { useCartState } from '../../../context/cart-provider-context/cart-provider-context';
import { useNavbarMobile } from '../../../context/navbar-mobile-context/navbar-mobile-context';
import { signIn, signOut } from 'next-auth/client';

export default function SidenavMobile() {
  const { showMenu, handleShowMenu } = useNavbarMobile();
  const cartState = useCartState();
  let totalItems;
  cartState.items.length > 0 &&
    (totalItems = cartState.items.reduce((accum, fooditem) => {
      return accum + fooditem.quantity;
    }, 0));
  return (
    <div
      className={
        showMenu
          ? `${styles.navMenu__open} ${styles.navMenuSlideIn} `
          : styles.navMenu__close
      }>
      <svg
        onClick={handleShowMenu}
        className={styles.navMenu__iconClose}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24">
        <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
      </svg>
      <img
        className={styles.navMenu__logo}
        src="/assets/components/sidenav-mobile/logo.png"
        alt="restaurant name"
      />
      <ul className={styles.navMenu__ul}>
        <li className={styles.navMenu__li} onClick={handleShowMenu}>
          <Link href="/">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24">
                <path
                  fill="gray"
                  d="M20 7.093v-5.093h-3v2.093l3 3zm4 5.907l-12-12-12 12h3v10h7v-5h4v5h7v-10h3zm-5 8h-3v-5h-8v5h-3v-10.26l7-6.912 7 6.99v10.182z"
                />
              </svg>
              Home
            </a>
          </Link>
        </li>

        <li className={styles.navMenu__li} onClick={handleShowMenu}>
          <Link href="/menu/roti">
            <a>
              <svg
                className={
                  styles.navbarDesktop__ulSection__ul__li__div__span__svg
                }
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24">
                <path
                  d="M17.995 13v8.5c0 .374.343.5.5.5h.001c.276 0 .5-.224.5-.5 0 0 .008-16.774 0-19.265-.933 1.081-2.556 5.196-3.333 10.765h2.332zm.501 11c-1.203 0-2.501-.956-2.501-2.5v-6.501h-2.545c.136-4.058 2.442-14.999 5.738-14.999 1.007 0 1.801.811 1.807 1.845.01 1.348.001 19.655.001 19.655 0 1.378-1.122 2.5-2.5 2.5m-7.849-24h-6.315c-.28 1.447-1.071 5.458-1.309 7.853-.207 2.084 1.016 3.03 1.709 3.55.147.117.265.294.265.482.003 1.595.003 8.287.003 9.591 0 1.391.98 2.524 2.552 2.524 1.453 0 2.448-1.139 2.448-2.524v-9.538c0-.19.102-.369.251-.486.723-.531 1.991-1.464 1.755-3.638-.259-2.383-1.074-6.393-1.359-7.814m-1.476 2s.616 3.909.847 6.029c.13 1.212-.559 1.494-1.152 1.964-.791.626-.866 1.186-.866 1.771v9.609c0 .299-.09.627-.506.627-.417 0-.494-.346-.494-.627v-9.615c0-.574-.042-1.143-.828-1.773-.581-.466-1.275-.769-1.159-1.935.211-2.114.774-6.05.774-6.05h.476v5h.817l.139-5h.524l.123 5h.835l-.033-5h.503z"
                  fill="gray"
                />
              </svg>
              Food menu
            </a>
          </Link>
        </li>
        <li className={styles.navMenu__li} onClick={handleShowMenu}>
          <Link href="/offers">
            <a>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd">
                <path d="M12.434 22.586l7.859-7.858.707.707-8.565 8.565-.001-.001v.001l-12.434-12.434.707-.707 11.727 11.727zm-.033-1.7l-12.401-12.405v-8.481h8.441l12.445 12.401-8.485 8.485zm-4.373-19.886h-7.028v7.067l11.401 11.405 7.07-7.07s-7.534-7.506-11.443-11.402zm-1.598 2.594c.78.78.78 2.048 0 2.828-.781.781-2.048.781-2.829 0-.78-.78-.78-2.048 0-2.828.781-.781 2.048-.781 2.829 0zm-.707.707c.39.39.39 1.024 0 1.414-.391.39-1.024.39-1.414 0-.391-.39-.391-1.024 0-1.414.39-.39 1.023-.39 1.414 0z" />
              </svg>
              offers
            </a>
          </Link>
        </li>

        <li className={styles.navMenu__li} onClick={handleShowMenu}>
          <Link href="/cart">
            <a>
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd">
                <path d="M13.5 21c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m-6 2c-.276 0-.5-.224-.5-.5s.224-.5.5-.5.5.224.5.5-.224.5-.5.5m0-2c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5m16.5-16h-2.964l-3.642 15h-13.321l-4.073-13.003h19.522l.728-2.997h3.75v1zm-22.581 2.997l3.393 11.003h11.794l2.674-11.003h-17.861z" />
              </svg>
              {totalItems ? (
                <b style={{ color: '#ff3008' }}> {totalItems} </b>
              ) : (
                'Cart'
              )}
            </a>
          </Link>
        </li>
        {cartState.user.name ? (
          <li
            className={styles.navMenu__li}
            onClick={() => {
              handleShowMenu();
              signOut();
            }}>
            <a href="">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd">
                <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" />
              </svg>
              Sign out
            </a>
          </li>
        ) : (
          <li className={styles.navMenu__li} onClick={handleShowMenu}>
            <Link href="/sign-in">
              <a>
                <svg
                  width="24"
                  height="24"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd">
                  <path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z" />
                </svg>
                Sign in
              </a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
