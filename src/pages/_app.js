import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import styles from '../styles/_app.module.css';
import Head from 'next/head';
import 'swiper/swiper-bundle.css';
import { SmallMenuButtonProvider } from '../context/smallmenu-button-context/smallmenu-button-context';
import { NavbarMobileProvider } from '../context/navbar-mobile-context/navbar-mobile-context';
import { CartProvider } from '../context/cart-provider-context/cart-provider-context';
import { CartPageUiProvider } from '../context/cart-page-ui-context/cart-page-ui-context';
import { Provider } from 'next-auth/client';
import SessionDataHelper from '../components/session-data-helper/SessionDataHelper';
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider session={pageProps.session}>
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
                  <SessionDataHelper
                    Component={Component}
                    pageProps={pageProps}></SessionDataHelper>
                </div>
              </NavbarMobileProvider>
            </SmallMenuButtonProvider>
          </CartProvider>
        </CartPageUiProvider>
      </Provider>
    </>
  );
}

export default MyApp;
