import styles from './Bnbnft.module.css';

import NFTone from '../Assets/image 7.svg';
import NFTtwo from '../Assets/image 8.svg';
import NFTthree from '../Assets/image 9.svg';


const Bnbnft = () => {
  return <div className={styles.container}>
    <section className={styles.frame}>
      <img id={styles.one} src={NFTone} alt='NFT' />
      <img id={styles.two} src={NFTtwo} alt='NFT' />
      <img id={styles.three} src={NFTthree} alt='NFT' />
    </section>
    <section>
      <h2 className={styles.h2}>Metabnb NFTs</h2>
      <p className={styles.p}>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of exclusive services</p>
      <button className={styles.btn} type='button'>Learn more</button>
    </section>
  </div>
};

export default Bnbnft;