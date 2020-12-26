import React from 'react'
import Logo from '../assets/desktop/logo.svg'
import './HeaderStyle.css'

const LogoDisplay = () => {
    return (
        <div className='logo'  role="img" aria-label="creative design logo">
            <img src={Logo} alt="creative design logo" className="logoImg"
               tabIndex="0"  />
        </div>
    )
}
export default LogoDisplay