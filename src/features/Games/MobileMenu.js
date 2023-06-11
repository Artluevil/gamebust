import React from 'react'
import { useState } from 'react';
import mobileMenuIcon from '../../images/mobile_menu_btn.png'
import closeBtn from '../../images/close_btn.png'

export default function MobileMenu() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-btn-container">
                <img className="mobile-menu-btn" src={mobileMenuIcon} onClick={() => toggleClass()} />
            </div>
            <div className={isActive ? 'mobile-menu-container' : 'mobile-menu-container-hidden'}>
                <img className="close-icon" src={closeBtn} onClick={() => toggleClass()} />
                <h2>Home</h2>
                <h2>Releases</h2>
                <p>Last week</p>
                <p>Last 30 days</p>
                <p>new realeses this year</p>
                <p>Release calendar</p>
                <h2>Top</h2>
                <p>Best of the year</p>
                <p>Popular in 2022</p>
                <p>All time best</p>
            </div>
        </div>
    )
}