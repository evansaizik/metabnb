import classes from './Header.module.css';
import Nav from './Nav';
import bnb from '../Assets/Vector.png';
import icon from '../Assets/Vector (1).png'

const Header = () => {
  return <header className={classes.header}>
    <img src={icon} alt='icon' />
    <img src={bnb} alt='metabnb'/>
    <Nav />
    <button className={classes.btn}>Connect wallet</button>
  </header>
};

export default Header;