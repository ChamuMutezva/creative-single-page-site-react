import React from 'react'
import Hero from './Hero/Hero'
import Primary from './Primary/Primary'
import Secondary from './Secondary/Secondary'
import Promotional from './Promotional/Promotional'
import Projects from './Projects/Projects'

const Main = () => {
    return (
        <>
            <div className="hero__primary">
                <Hero />
                <Primary />
            </div>
            <Secondary />
            <Promotional />
            <Projects />
        </>
    )
}

export default Main