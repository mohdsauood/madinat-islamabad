import React, { useState } from 'react';
import styles from './SocialSection.module.css';
import HelperModal from '../helper-modal/HelperModal';

export default function SocialSection() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <section className={styles.socialSec}>
        <p className={styles.socialSec__p}>
          follow our social media to see exclusive offers
        </p>
        <section className={styles.socialSec__iconsDiv}>
          <div
            className={styles.socialSec__iconsDiv__subDiv}
            onClick={handleShow}>
            <svg
              className={styles.fbIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
            </svg>
            <p className={styles.socialSec__iconsDiv__subDiv_p}>
              fb/Madinat.islamabad
            </p>
          </div>
          <div
            className={styles.socialSec__iconsDiv__subDiv}
            onClick={handleShow}>
            <svg
              className={styles.scIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.126 16.475c-.057.077-.103.4-.178.655-.086.295-.356.262-.656.203-.437-.085-.827-.109-1.281-.034-.785.131-1.601 1.292-2.969 1.292-1.472 0-2.238-1.156-3.054-1.292-.832-.138-1.31.084-1.597.084-.221 0-.307-.135-.34-.247-.074-.251-.12-.581-.178-.66-.565-.087-1.84-.309-1.873-.878-.008-.148.096-.279.243-.303 1.872-.308 3.063-2.419 2.869-2.877-.138-.325-.735-.442-.986-.541-.648-.256-.739-.55-.7-.752.053-.28.395-.468.68-.468.275 0 .76.367 1.138.158-.055-.982-.194-2.387.156-3.171.667-1.496 2.129-2.236 3.592-2.236 1.473 0 2.946.75 3.608 2.235.349.783.212 2.181.156 3.172.357.197.799-.167 1.107-.167.302 0 .712.204.719.545.005.267-.233.497-.708.684-.255.101-.848.217-.986.541-.198.468 1.03 2.573 2.869 2.876.146.024.251.154.243.303-.033.569-1.314.791-1.874.878z" />
            </svg>
            <p className={styles.socialSec__iconsDiv__subDiv_p}>
              Sc: madinatislamabad
            </p>
          </div>
          <div
            className={styles.socialSec__iconsDiv__subDiv}
            onClick={handleShow}>
            <svg
              className={styles.igIcon}
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 24 24">
              <path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z" />
            </svg>
            <p className={styles.socialSec__iconsDiv__subDiv_p}>
              @Madinatislamabad
            </p>
          </div>
        </section>
      </section>
      <HelperModal show={show} handleClose={handleClose} />
    </>
  );
}
