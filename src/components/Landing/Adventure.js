import classes from './Adventure.module.css';

import desertKing from '../Assets/Group 4048.svg';
import desert from '../Assets/Group 4049.svg';
import King from '../Assets/Group 4050.svg';
import sea from '../Assets/Group 4051.svg';
import desertKingOne from '../Assets/Group 40481.svg';
import desertOne from '../Assets/Group 40491.svg';
import KingOne from '../Assets/Group 40501.svg';
import seaOne from '../Assets/Group 40511.svg';


const Adventure = () => {
  return <section className={classes.container} >
    <h3>Inspiration for your next adventure</h3>
    <main className={classes.main}>
      <div>
        <img src={desertKing} alt='desert king' />
        <img src={desert} alt='desert' />
        <img src={King} alt='king' />
        <img src={sea} alt='sea' />
        <img src={desertKingOne} alt='des' />
        <img src={desertOne} alt='des' />
        <img src={KingOne} alt='des' />
        <img src={seaOne} alt='des' />
      </div>
    </main>
  </section>
}

export default Adventure;