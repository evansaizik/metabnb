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
  const nftList = [desertKing, desert, King, sea, desertKingOne, desertOne, KingOne, seaOne]

  return <section className={classes.container} >
    <h3>Inspiration for your next adventure</h3>
    <main className={classes.main}>
      <div>{nftList.map(nft => {
        return <img src={nft} alt='desert king' />
      })}
      </div>
    </main>
  </section>
}

export default Adventure;