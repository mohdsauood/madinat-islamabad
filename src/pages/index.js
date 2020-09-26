import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';

export default function Home() {
  return (
    <>
      <Overlay />
      <Header />
      <Main />
      <Footer />
    </>
  );
}
