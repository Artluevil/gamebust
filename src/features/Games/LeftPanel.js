import React from 'react'

export default function LeftPanel() {
    return (
        <div className="left-panel-container">
            <div className="new-release-container">
                <h2>New Releases</h2>
                <div className="options-container">
                    <p className="option">Last 30 days</p>
                    <p className="option">This week</p>
                    <p className="option">Next week</p>
                    <p className="option">Release calendar</p>
                </div>
            </div>
            <div className="top-games-container">
                <h2>Top</h2>
                <div className="options-container">
                    <p className="option">Best of the year</p>
                    <p className="option">Popular in 2020</p>
                    <p className="option">All time top 250</p>
                </div>
            </div>
        </div>
    )
}
