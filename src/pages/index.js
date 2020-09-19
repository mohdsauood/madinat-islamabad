import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
import Header from '../components/header/Header';

export default function Home() {
  return (
    <>
      <Overlay initialValue={false} />
      <Header />
    </>
  );
}
