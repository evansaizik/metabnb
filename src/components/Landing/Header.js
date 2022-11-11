import classes from './Header.module.css';
import Nav from './Nav';
import bnb from '../Assets/Group.svg';

const Header = () => {
  return <header className={classes.header}>
    <img src={bnb} alt='metabnb'/>
    <Nav />
    <button className={classes.btn}>Connect wallet</button>
  </header>
};

export default Header;