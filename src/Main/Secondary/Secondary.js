import React from 'react'
import './Secondary.css'
import '../../App.css'
// import SecondaryImgMobile from '../../assets/mobile/image-strategic.jpg'
// import SecondaryImgTablet from '../../assets/tablet/image-strategic.jpg'
// import SecondaryImgDesktop from '../../assets/desktop/image-strategic.jpg'

const Secondary = () => {

    return (
        <div className="secondary">
            <div className="secondary__img">
               
            </div>
            <div className="secondary__info">
                <div className="secondary__info__text">
                    <h2 className="secondary__heading">
                      <strong>Design</strong> is strategic.
                    </h2>
                    <p className="secondary__summary">
                        A well-crafted design strategy consistently produces desired
                        outcomes and brand awareness.  We are firm believers that success
                        lies in creative collaboration with our clients.
                    </p>
                    <button className="secondary__btn" tabIndex="0">Schedule a call</button>
                </div>
                <p>

                </p>

            </div>

        </div>
    )
}

export default Secondary