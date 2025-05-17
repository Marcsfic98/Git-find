import './style.css';
import pngegg from '../../assents/logo/pngegg.png'

const Header = () => {
    return (
      <header>
        <img src={pngegg} alt='logo'/>
        <h1>Git Find</h1>
      </header>
    );
  }
  
  export {Header};
  