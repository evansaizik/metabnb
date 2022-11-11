import layouts from './Footer.module.css';
import bnb from './Assets/meta.svg';

const Footer = () => {
  return <footer className={layouts.container}>
    <img className={layouts.img} src={bnb} alt='meta bnb' />
    <div className={layouts.services}>
      <section className={layouts.section}>
        <h4>Community</h4>
        <p>NFT</p>
        <p>Tokens</p>
        <p>Landlords</p>
        <p>Discord</p>
      </section>
      <section className={layouts.section}>
        <h4>Places</h4>
        <p>Castle</p>
        <p>Farms</p>
        <p>Beach</p>
        <p>Learn more</p>
      </section>
      <section className={layouts.section}>
        <h4>About us</h4>
        <p>Road map</p>
        <p>Creators</p>
        <p>Career</p>
        <p>Contact us</p>
      </section>
    </div>
    {/* <img src={rights} alt='rights' className={layouts.rights} /> */}
    <p className={layouts.rights}>&copy; 2022 Metabnb</p>
  </footer>
};

export default Footer;