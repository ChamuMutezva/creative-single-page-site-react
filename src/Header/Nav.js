import React from 'react'
import { useEffect } from 'react'
const Nav = (props) => {
    console.log(props.toggle)
    // when modal is on  set body overflowY to hidden
    // remove hidden when modal is off
    useEffect(() => {
        if(!props.toggle) {
           // document.body.style.overflowY = 'hidden'
           document.body.classList.add("bodyCtrl");
        } 
        return () => {
           // document.body.style.overflowY = 'unset'
           document.body.classList.remove("bodyCtrl");
        }
     } , [props.toggle])

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