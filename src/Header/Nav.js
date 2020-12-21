import React from 'react'

const Nav = (props) => {
console.log(props.toggle)
const toggleMenu = () => {
   return props.toggle === true ? 'navigation' : 'navShow'
}
    return (
        <div className={`navigation ${props.toggle ? "navShow" : "navHide"}`} >
            <ul className="navList">
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Products</a></li>
            </ul>
            <button type="button">Schedule a call</button>
        </div>
    )
}
export default Nav