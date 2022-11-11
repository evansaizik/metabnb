import Adventure from './Adventure';
import Bnbnft from './Bnbnft';
import Collectibles from './Collectibles';
import Header from './Header';
import classes from './landing.module.css';
import LandingMain from './LandingMain';

const Landing = () => {
  return <div className={classes.layout}>
    <div className={classes.container}>
      <Header />
      <LandingMain />
      <Collectibles />
      <Adventure />
      <Bnbnft />
    </div>
  </div>
};

export default Landing;