import Logo from './Header/Logo'
import Nav from './Header/Nav'
import Main from './Main/Mainpage'
import Footer from './Footer/Footer'
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
      <div className="wrapper">
        <header>
          <Logo />
          <Nav toggle={toggleMenu} />
          <div className="nav-toggle">
            <img src={MenuImg} alt="menu toggle"
              className={`openMenu ${toggleMenu ? "navShow" : "navHide"}`} onClick={changeToggleState} />
            <img src={CloseImg} alt="close toggle"
              className={`closeMenu ${toggleMenu ? "navHide" : "navShow"}`} onClick={changeToggleState} />
          </div>
        </header>
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
