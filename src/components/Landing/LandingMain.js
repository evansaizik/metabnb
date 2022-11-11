import classes from './LandingMain.module.css';
import image3 from '../Assets/image 3.png';
import image4 from '../Assets/image 4.png';
import image5 from '../Assets/image 5.png';
import image6 from '../Assets/image 6.png';


const LandingMain = () => {
  return <div className={classes.container}>
    <div className={classes['section-one']}>
      <h2>Rent a <span>place</span> away from <span>home</span> in the <span>metaverse</span></h2>
      <p>We provide you access to luxury and affordable houses in the metaverse, get a change to turn your imagination to a reality at your comfort zone.</p>
      <form className={classes.search}>
        <input className={classes.input} type='text' />
        <button className={classes.btn} type='submit'>Search</button>
      </form>
    </div>
    <div className={classes['section-two']}>
      <img src={image4} alt='photos' className={classes.three} />
      <img src={image6} alt='pic' className={classes.four} />
      <img src={image3} alt='icon' className={classes.five} />
      <img src={image5} alt='images' className={classes.six} />
    </div>
  </div>
};

export default LandingMain;