import styles from '../styles/index.module.css';
import Overlay from '../components/overlay/Overlay';
export default function Home() {
  return (
    <>
      <Overlay initialValue={false} />
      <p className={styles.red}>hello</p>
    </>
  );
}
