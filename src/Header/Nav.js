import React from 'react'

const Nav = (props) => {
    console.log(props.toggle)

    return (
        <div className={`navigation ${props.toggle ? "navHide" : "navShow"}`} tabIndex="0" role="navigation">
            <ul className="navList" role="list">
                <li tabIndex="0" role="listitem"><a href="">About</a></li>
                <li tabIndex="0" role="listitem"><a href="">Services</a></li>
                <li tabIndex="0" role="listitem"><a href="">Products</a></li>
            </ul>
            <button type="button" tabIndex="0">Schedule a call</button>
        </div>
    )
}
export default Nav