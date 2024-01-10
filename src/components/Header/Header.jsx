import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css";
import Book from '../assets/OnCooking.jpg';

const Header = () => {
  return (
    <div className="holder">
        <header className="header">
            <Navbar />
            <div className="header-content flex flex-column text-center text-white">
                <div className="header-text">
                    <h2 className='header-title text-capitalize'>Are you searching for a book?</h2> <br />
                    <p className="header-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque volutpat nunc. Proin laoreet justo vel lectus maximus, sit amet blandit dui hendrerit.</p>
                    <button type="button" class="btn btn-primary">Learn More</button>
                </div>
                <div className='header-image'>
                    <img src={Book} alt='cookingbook' />
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header