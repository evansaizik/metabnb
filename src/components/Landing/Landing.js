import Adventure from './Adventure';
import Bnbnft from './Bnbnft';
import Collectibles from './Collectibles';
import classes from './landing.module.css';
import LandingMain from './LandingMain';

const Landing = () => {
  return <div className={classes.layout}>
    <div className={classes.container}>
      <LandingMain />
      <Collectibles />
      <Adventure />
      <Bnbnft />
    </div>
  </div>
};

export default Landing;