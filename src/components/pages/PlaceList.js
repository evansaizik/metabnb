import placedesign from './PlaceList.module.css';
import one from '../Assets/pic.svg';
import two from '../Assets/pic1.svg';
import three from '../Assets/pic2.svg';
import four from '../Assets/pic3.svg';
import five from '../Assets/pic4.svg';
import six from '../Assets/pic5.svg';
import seven from '../Assets/pic6.svg';
import eight from '../Assets/pic7.svg';
import nine from '../Assets/pic8.svg';
import ten from '../Assets/pic9.svg';
import el from '../Assets/pic10.svg';
import twe from '../Assets/pic11.svg';
import thir from '../Assets/pic12.svg';
import fort from '../Assets/pic13.svg';
import fift from '../Assets/pic14.svg';
import sixt from '../Assets/pic15.svg';

const PlaceList = () => {
  const list = [one, two, three, four, five, six, seven, eight, nine, ten, el, twe, thir, fort, fift, sixt]

  return <section className={placedesign.placelist}>
    
      {list.map(places => {
        return <img className={placedesign.items} src={places} alt='jknv' />
      })}
      
    {/* <div className={placedesign.items}>two</div>
    <div className={placedesign.items}>three</div>
    <div className={placedesign.items}>one</div>
    <div className={placedesign.items}>one</div>
    <div className={placedesign.items}>one</div>
    <div className={placedesign.items}>one</div>
    <div className={placedesign.items}>one</div>
    <div className={placedesign.items}>one</div> */}
  </section>
};

export default PlaceList;