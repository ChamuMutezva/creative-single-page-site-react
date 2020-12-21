import Logo from './Header/Logo'
import Nav from './Header/Nav'
import MenuImg from './assets/mobile/icon-hamburger.svg'
import CloseImg from './assets/mobile/icon-cross.svg'
import { useState } from 'react'
import './App.css';

function App() {
  const [toggleMenu, setToggleMenu] = useState(true)

  const changeToggleState = () => {
    setToggleMenu(!toggleMenu)   
  }
  return (
    <div className="App">
      <header>
        <Logo />
        <Nav toggle={toggleMenu}/>
        <div className="nav-toggle">
          <img src={MenuImg} alt="menu toggle"
           className={`openMenu ${toggleMenu ? "navShow" : "navHide"}`} onClick={changeToggleState}/>
          <img src={CloseImg} alt="close toggle"
           className={`closeMenu ${toggleMenu ? "navHide" : "navShow"}`} onClick={changeToggleState}/>
        </div>
      </header>
    </div>
  );
}

export default App;
