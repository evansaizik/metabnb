import classes from './Collectibles.module.css';
import MBToken from '../Assets/Group 59537.svg';
import metamask from '../Assets/Group 4040.svg';
import opensea from '../Assets/Frame 4041.svg';

const Collectibles = () => {
  return <div className={classes.container}>
    <img src={MBToken} alt='MBToken'/>
    <img src={metamask} alt='MBToken'/>
    <img src={opensea} alt='MBToken'/>
  </div>
};

export default Collectibles;