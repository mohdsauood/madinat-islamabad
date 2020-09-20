import '../styles/globals.css';
import styles from '../styles/_app.module.css';
import Head from 'next/head';
import 'swiper/swiper-bundle.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://kit.fontawesome.com/7cf0ce6bd0.js"
          crossOrigin="anonymous"></script>
      </Head>
      <div className={styles.wrapper}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
