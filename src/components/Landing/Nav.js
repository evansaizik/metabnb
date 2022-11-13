import classes from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import menuIcon from '../Assets/Down Chevron.svg'

const Nav = () => {
  const [toggleNav, setToggleNav] = useState(false);

  const navHandler = () => {
    setToggleNav(value => !value)
  };

  return <>
    <nav onClick={navHandler} className={toggleNav ? `${classes.nav} ${classes.open}`: `${classes.nav} ${classes.close}`}>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/places' >Place to stay</NavLink>
      <NavLink to='/' >NFTs</NavLink>
      <NavLink to='/' >Community</NavLink>
      <img className={classes.menu} src={menuIcon} alt='menu icon' />
    </nav>
  </>
};

export default Nav;