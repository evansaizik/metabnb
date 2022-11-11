import classes from './Nav.module.css';

const Nav = () => {
  return <nav className={classes.nav}>
    <span><a href='#'>Home</a></span>
    <span><a href='#'>Place to stay</a></span>
    <span><a href='#'>NFTs</a></span>
    <span><a href='#'>Community</a></span>
  </nav>
};

export default Nav;