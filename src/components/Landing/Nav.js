import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return <nav className={classes.nav}>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/places' >Place to stay</NavLink>
    <NavLink to='/' >NFTs</NavLink>
    <NavLink to='/' >Community</NavLink>
  </nav>
};

export default Nav;