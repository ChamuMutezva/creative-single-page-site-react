import React from 'react'
import Logo from '../assets/desktop/logo.svg'
import './HeaderStyle.css'

const LogoDisplay = () => {
    return(
       <div className='logo'>
           <img src={Logo} alt="creative design logo" className="logoImg"/>
       </div>
    )
}
export default LogoDisplay