import styling from './Modal.module.css';
import closeIcon from '../Assets/x.svg';
import metamask from '../Assets/metamask.svg';
import wallet from '../Assets/walletconnection.svg'
import proceedIcon from '../Assets/Down Chevron.svg';
import Backdrop from './Backdrop';
import ReactDOM from 'react-dom';

const Modal = props => {

  return <>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById('backdrop'))}
    
    <div className={styling.card}>
      <header className={styling.header}>
        <h4>Connect Wallet</h4>
        <img onClick={props.onClick} className={styling.icon} src={closeIcon} alt='close modal' />
      </header>
      <section >
        <p>Choose your preferred wallet:</p>
        <div className={styling.wallet}>
          <img src={metamask} alt='metamask wallet' />
          <img className={styling.proceed} src={proceedIcon} alt='proceed' />
        </div>
        <div className={styling.wallet}>
          <img src={wallet} alt='wallet connection' />
          <img className={styling.proceed} src={proceedIcon} alt='proceed' />
        </div>
      </section>
    </div>
  </>
};

export default Modal;