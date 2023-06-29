import React from 'react';
import imgBoy from '../../assets/images/card.png';
import './style.scss'
const Header = () => {
    return (
        <>
            <div className="topMain">
                <div className="container">
                    <div className="df">
                        <div className="topLeft">
                            <h1>Get best knowledges with us!</h1>
                            <p>Get best knowledges with us!
                                PowerMetrics is a lightweight BI tool that helps you explore and share the right insights at the right time.</p>
                                <button className="start">Start Now</button>
                                <button className="register">Register to our course</button>
                        </div>
                        <div className="topRight">
                        <img src={imgBoy} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;