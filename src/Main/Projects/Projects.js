import React from 'react'
import { useState } from 'react'
/* import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css'; */

import './Projects.css'
/* carousel images for mobile, tablet and desktop */
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
    const [count, setCount] = useState(1)

    //move forward to next image and heading
    const NextBtn = (e) => {
        const titles = Array.from(document.querySelectorAll(".ctrls__title"))
        const imgSlides = Array.from(document.querySelectorAll(".slide"))

        titles.forEach(title => {
            title.classList.add("titleHide")
        })

        imgSlides.forEach(slide => {
            slide.classList.add("slideHide")
        })

        if (count === titles.length - 1) {
            setCount(0)
        } else {
            setCount(count + 1)
        }

        titles.forEach((title, idx) => {
            if (idx === count) {
                title.classList.add("titleShow")
            } else {
                title.classList.remove("titleShow")
            }
        })

        imgSlides.forEach((slide, idx) => {
            if (idx === count) {
                slide.classList.add("slideShow")
            } else {
                slide.classList.remove("slideShow")
            }
        })

    }

    //move back to previous image
    const BackBtn = (e) => {
        const titles = Array.from(document.querySelectorAll(".ctrls__title"))
        const imgSlides = Array.from(document.querySelectorAll(".slide"))

        titles.forEach(title => {
            title.classList.add("titleHide")
        })

        imgSlides.forEach(slide => {
            slide.classList.add("slideHide")
        })

        if (count === 0) {
            setCount(titles.length - 1)
        } else {
            setCount(count - 1)
        }

        titles.forEach((title, idx) => {
            if (idx === count) {
                title.classList.add("titleShow")
            } else {
                console.log(idx)
                title.classList.remove("titleShow")
            }
        })

        imgSlides.forEach((slide, idx) => {
            if (idx === count) {
                slide.classList.add("slideShow")
            } else {
                slide.classList.remove("slideShow")
            }
        })

    }
    return (
        <div className="projects">
            <div className="projects__container">
                <div className="slide slide1">
                    <figure>
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
                <div className="slide slide2">
                    <figure>
                        <img src={Slide2Mobile} alt=""
                            srcSet={`${Slide2Mobile} 375w,  ${Slide2Tablet} 438w, ${Slide2Desktop} 895w`}
                            sizes="(min-width: 1220px) 60vw, (min-width: 680px) 50vw,  100vw"
                        />
                        <figcaption>
                            <h5 className="figure__title">New Majestic Hotel</h5>
                            <h6 className="figure__subtitle">2018 Project</h6>
                        </figcaption>
                    </figure>
                </div>
                <div className="slide slide3">
                    <figure>
                        <img src={Slide3Mobile} alt=""
                            srcSet={`${Slide3Mobile} 375w,  ${Slide3Tablet} 438w, ${Slide3Desktop} 895w`}
                            sizes="(min-width: 1220px) 60vw, (min-width: 680px) 50vw,  100vw"
                        />
                        <figcaption>
                            <h5 className="figure__title">Crypto Dashboard </h5>
                            <h6 className="figure__subtitle">2016 Project</h6>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="projects__ctrl">
                <div className="projects__ctrl_container">
                    <div className="titles">
                        <div className="ctrls__title ctrls__title1">
                            <h4> Brand naming & guidelines </h4>
                        </div>
                        <div className="ctrls__title ctrls__title2">
                            <h4 >Brand identity & merchandise</h4>
                        </div>
                        <div className="ctrls__title ctrls__title3">
                            <h4> Brand identity & web design</h4>
                        </div>
                    </div>
                </div>
                <div className="ctrls">
                    <label htmlFor="back">
                        <button className="ctrls__btn" id="back" onClick={BackBtn} tabIndex="0"><img src={IconPrevious}
                         alt="view previous image" aria-label="view previous image" /></button>
                    </label>
                    <label htmlFor="next">
                        <button className="ctrls__btn" id="next" onClick={NextBtn} tabIndex="0"><img src={IconNext} 
                        alt="view next image" aria-label="view previous image" /></button>
                    </label>
                </div>
            </div>

        </div>
    )
}

export default Projects