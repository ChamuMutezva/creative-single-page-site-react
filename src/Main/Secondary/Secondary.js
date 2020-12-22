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
                {/* <img srcSet={`${SecondaryImgMobile} 375w,
                             ${SecondaryImgTablet} 378w,
                             ${SecondaryImgDesktop} 735w`}
                    sizes="(min-width: 1420px) 735px,
                            (min-width: 980px) 378px,
                            100vw"


                    src={SecondaryImgMobile} alt=""

    /> */}
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
                    <button className="secondary__btn">Schedule a call</button>
                </div>
                <p>

                </p>

            </div>

        </div>
    )
}

export default Secondary