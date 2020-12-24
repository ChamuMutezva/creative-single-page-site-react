import React from 'react'

const Nav = (props) => {
    console.log(props.toggle)

    return (
        <div className={`navigation ${props.toggle ? "navHide" : "navShow"}`} >
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