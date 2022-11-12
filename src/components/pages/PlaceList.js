import placedesign from './PlaceList.module.css';
import one from '../Assets/pic1.svg';
import two from '../Assets/pic2.svg';
import three from '../Assets/pic3.svg';
// import four from '../Assets/pic4.svg';
// import five from '../Assets/pic5.svg';
// import six from '../Assets/pic6.svg';
// import seven from '../Assets/pic7.svg';
// import eight from '../Assets/pic8.svg';
// import nine from '../Assets/pic9.svg';
// import ten from '../Assets/pic10.svg';
// import el from '../Assets/pic11.svg';
// import twe from '../Assets/pic12.svg';
// import thir from '../Assets/pic13.svg';
// import fort from '../Assets/pic14.svg';
// import fift from '../Assets/pic15.svg';
// import sixt from '../Assets/pic16.svg';

const PlaceList = () => {
  return <section className={placedesign.placelist}>
    <div>
      <img className={placedesign.pic} src={one} alt='jknv' />
      <img src={two} alt='jknv' />
      <img src={three} alt='jknv' />
    </div>
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