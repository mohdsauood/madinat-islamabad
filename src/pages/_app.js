import '../styles/globals.css';
import styles from '../styles/_app.module.css';
import Head from 'next/head';
import 'swiper/swiper-bundle.css';
import { SmallMenuButtonProvider } from '../context/smallmenu-button-context/smallmenu-button-context';
import { NavbarMobileProvider } from '../context/navbar-mobile-context/navbar-mobile-context';
import { CartProvider } from '../context/cart-provider-context/cart-provider-context';
import { CartPageUiProvider } from '../context/cart-page-ui-context/cart-page-ui-context';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartPageUiProvider>
        <CartProvider>
          <SmallMenuButtonProvider>
            <NavbarMobileProvider>
              <Head>
                <script
                  src="https://kit.fontawesome.com/7cf0ce6bd0.js"
                  crossOrigin="anonymous"></script>
              </Head>
              <div className={styles.wrapper}>
                <Component {...pageProps} />
              </div>
            </NavbarMobileProvider>
          </SmallMenuButtonProvider>
        </CartProvider>
      </CartPageUiProvider>
    </>
  );
}

export default MyApp;
