import React, {useState} from 'react';
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from '../assets/librarylogo.png'
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className='navbar' id='navbar'>
        <div className="container navbar-content flex">
            <div className="logo-and-toggle flex flex-sb">
                <Link to="/" className="navbar-logo flex">
                    <img src={Logo} alt="library-logo" />
                    <span className='text-uppercase fw-6 fs-18 ls-1'>LIBRARY</span>
                </Link>
                <button type="button" className="navbar-toggler-btn" onClick={handleNavbar}> <HiOutlineMenuAlt3 size={32} style={{ color: `${toggleMenu ? "#fff" : "#000000"}`}} /></button>
            </div>
            <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to = "/" className="nav-link text-uppercase text-white fs-19 fw-5 ls-1">HOME</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/about" className="nav-link text-uppercase text-white fs-19 fw-5 ls-1">ABOUT</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/contact" className="nav-link text-uppercase text-white fs-19 fw-5 ls-1">CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Navbar