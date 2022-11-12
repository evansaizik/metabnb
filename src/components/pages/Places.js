import styles from './Places.module.css';
import location from '../Assets/Frame 13.svg';
import one from '../Assets/Frame 140.svg';
import two from '../Assets/Frame 141.svg';
import three from '../Assets/Frame 141.svg';
import four from '../Assets/Frame 141.svg';
// import five from '../Assets/Frame 141.svg';
// import six from '../Assets/Frame 141.svg';
// import seven from '../Assets/Frame 141.svg';
// import eight from '../Assets/Frame 141.svg';
// import nine from '../Assets/Frame 141.svg';
// import ten from '../Assets/Frame 141.svg';
// import el from '../Assets/Frame 141.svg';
// import twe from '../Assets/Frame 141.svg';
// import thir from '../Assets/Frame 141.svg';
// import fort from '../Assets/Frame 141.svg';
// import fift from '../Assets/Frame 141.svg';
// import sixt from '../Assets/Frame 141.svg';


const Places = () => {
  // const houses = []


  return <div className={styles.page}>
    <img src={location} alt='location' />
    <div className={styles.options}>
      <p>Restaurants</p>
      <p>Cottage</p>
      <p>Castle</p>
      <p>fantasy city</p>
      <p>Carbins</p>
      <p>Off-grid</p>
      <p>Farm</p>
    </div>
    <section className={styles.place}>
      {/* <img src={one} alt='places' />
      <img src={two} alt='places' />
      <img src={three} alt='places' />
      <img src={four} alt='places' /> */}
      <div><img src={four} alt='places' /></div>
      <div><img src={four} alt='places' /></div>
      <div>hello</div>
      <div>hello</div>
    </section>
  </div>
}

export default Places;