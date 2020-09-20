import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
import Header from '../components/header/Header';
import Main from '../components/main/Main';
import Footer from '../components/footer/Footer';
import { NavbarMobileProvider } from '../context/navbar-mobile-context/navbar-mobile-context';
export default function Home() {
  return (
    <>
      <NavbarMobileProvider>
        <Overlay />
        <Header />
      </NavbarMobileProvider>
      <Main />
      <Footer />
    </>
  );
}
