import design from './Places.module.css';
import location from '../Assets/Frame 13.svg';
import PlaceList from './PlaceList';

const Places = () => {
  // const houses = []

  return <div className={design.page}>
    <img src={location} alt='location' />
    <div className={design.options}>
      <p>Restaurants</p>
      <p>Cottage</p>
      <p>Castle</p>
      <p>fantasy city</p>
      <p>Carbins</p>
      <p>Off-grid</p>
      <p>Farm</p>
    </div>
    <PlaceList />
  </div>
}

export default Places;