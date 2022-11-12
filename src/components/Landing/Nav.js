import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return <nav className={classes.nav}>
    {/* <span><a href='#'>Home</a></span> */}
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/places' >Place to stay</NavLink>
    <span><a href='#'>NFTs</a></span>
    <span><a href='#'>Community</a></span>
  </nav>
};

export default Nav;