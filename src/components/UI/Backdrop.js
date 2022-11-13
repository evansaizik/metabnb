import backdropstyle from './Backdrop.module.css';

const Backdrop = (props) => {
return <div onClick={props.onClick} className={backdropstyle.backdrop} />
};

export default Backdrop;