import React from 'react'
import './Projects.css'
import Slide1Mobile from '../../assets/mobile/image-slide-1.jpg'
import Slide2Mobile from '../../assets/mobile/image-slide-2.jpg'
import Slide3Mobile from '../../assets/mobile/image-slide-3.jpg'

import Slide1Tablet from '../../assets/tablet/image-slide-1.jpg'
import Slide2Tablet from '../../assets/tablet/image-slide-2.jpg'
import Slide3Tablet from '../../assets/tablet/image-slide-3.jpg'

import Slide1Desktop from '../../assets/desktop/image-slide-1.jpg'
import Slide2Desktop from '../../assets/desktop/image-slide-2.jpg'
import Slide3Desktop from '../../assets/desktop/image-slide-3.jpg'

import IconNext from '../../assets/desktop/icon-arrow-next.svg'
import IconPrevious from '../../assets/desktop/icon-arrow-previous.svg'

const Projects = () => {
    return (
        <div className="projects">
            <div className="projects__container">
                <figure className="slide1">
                    <img src={Slide1Mobile} alt=""
                        srcSet={`${Slide1Mobile} 375w,  ${Slide1Tablet} 438w, ${Slide1Desktop} 895w`}
                        sizes="(min-width: 1220px) 60vw, (min-width: 680px) 50vw,  100vw"
                    />
                    <figcaption>
                        <h5 className="figure__title">Lean Product Roadmap </h5>
                        <h6 className="figure__subtitle">2019 project</h6>
                    </figcaption>
                </figure>
            </div>
            <div className="projects__ctrl">
                <div className="projects__ctrl_container">
                    <h4 className="ctrls__title"> Brand naming & guidelines </h4>
                    <div className="ctrls">
                        <button className="ctrls__btn"><img src={IconPrevious} alt="" /></button>
                        <button className="ctrls__btn"><img src={IconNext} alt="" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects