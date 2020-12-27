import React from 'react'
import './Primary.css'
import '../../App.css'

const Primary = () => {
    return (
        <div className="primary">
            <div className="primary__details">
                <h1 className="primary__heading" aria-level="1">Branding & website design agency</h1>
                <p className="primary__summary">We specialize in visual storytelling by
                creating cohesive brand and website design solutions for small businesses,
                giving lasting impressions to audiences in a digital world.
            </p>
                <button type="button" className="primary__btn" tabIndex="0">Learn more</button>
            </div>
        </div>
    )
}

export default Primary