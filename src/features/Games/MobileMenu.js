import React from 'react'

export default function MobileMenu() {

    let mobileMenuBtn = false;

    if (mobileMenuBtn) {
        return (
            <div className="mobile-menu">
                <div className="mobile-menu-container">
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
    } else {
        return (
            <div className="mobile-menu">
                <div className="mobile-menu-container">
                    <h2 onClick={() => mobileMenuBtn = true}>X</h2>
                </div>
            </div>
        )
    }
}