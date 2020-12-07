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
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../utils/gtag';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Provider session={pageProps.session}>
        <CartPageUiProvider>
          <CartProvider>
            <SmallMenuButtonProvider>
              <NavbarMobileProvider>
                <DefaultSeo {...SEO} />
                <Head>
                  <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                  />
                  <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                  />
                  <link rel="manifest" href="/site.webmanifest" />
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
