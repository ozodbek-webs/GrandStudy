import React from 'react';
import './style.scss'
const Navbar = () => {
    return (
        <header>
            <div className="container">
                <nav className='navbar'>
                    <h1 className='logo'>GrandStudy</h1>
                    <ul className="list">
                        <li className="item"><a className='link' href="#">Home</a></li>
                        <li className="item"><a className='link' href="#about">About</a></li>
                        <li className="item"><a className='link' href="#">News</a></li>
                        <li className="item NavTeach"><a className='link ' href="#hTeacher">Our Teachers</a></li>
                        <li className="item"><a className='link' href="#tle">Contact</a></li>
                        <li className="item"><a className='link' href="#"><select><option value="eng">ENG</option><option value="rus">RUS</option><option value="uzb">UZB</option></select></a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;