import classes from './Adventure.module.css';

import desertKing from '../Assets/Group 4048.svg';
import desert from '../Assets/Group 4049.svg';
import King from '../Assets/Group 4050.svg';
import sea from '../Assets/Group 4051.svg';

const Adventure = () => {
  return <section className={classes.container} >
    <h3>Inspiration for your next adventure</h3>
    <main className={classes.main}>
      <div className={classes.offers}>
        <img src={desertKing} alt='desert king' />
        <img src={desert} alt='desert' />
        <img src={King} alt='king' />
        <img src={sea} alt='sea' />
      </div>
      <div className={classes.offers}>

      </div>
    </main>
  </section>
}

export default Adventure;