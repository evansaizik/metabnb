import styles from './Bnbnft.module.css';

import NFTbox from '../Assets/NFTbox.svg';
// import NFTtwo from '../Assets/image 8.svg';
// import NFTthree from '../Assets/image 9.svg';


const Bnbnft = () => {
  return <div className={styles.container}>
    <>
      <img id={styles.frame} src={NFTbox} alt='NFT' />
    </>
    <section>
      <h2 className={styles.h2}>Metabnb NFTs</h2>
      <p className={styles.p}>Discover our NFT gift cards collection. Loyal customers get amazing gift cards which are traded as NFTs. These NFTs gives our customer access to loads of exclusive services</p>
      <button className={styles.btn} type='button'>Learn more</button>
    </section>
  </div>
};

export default Bnbnft;