import React from "react";
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
    return (
        <section className="menu">

            <div className="menu-title">
                <img src="" alt="Logo"></img>
                <ul className="nav">
                    <li><Link to='#!'>Home</Link></li>
                    <li><Link to='#!'>About Us</Link></li>
                    <li><Link to='#!'>Contact Us</Link></li>
                    <li><Link to='#!'>Home</Link></li>
                </ul>
            </div>
        </section>
    )
}
export default Header;