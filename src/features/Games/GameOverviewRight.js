import React, {useState, useEffect} from 'react'
import getStoreButton from './functions/getStoreButton'
import GamePlaceholder from '../../images/game-placeholder.png'
import { Link, Route } from 'react-router-dom'
import ScreenshotsPage from './ScreenshotsPage'

export default function GameOverviewRight(props) {

    const {gameDataMovies, gameDataScreenshots, gameData, gameDataStores} = props

    let loadingWaiter = 'Loading...'

    function getMainTrailer(src) {
        return (
            <video autoPlay loop muted>
                <source src={src} />
            </video>
        )
    }

    function getMainScreenshot(src) {
        return (
            <img className="main-screenshot" src={src}/>
        )
    }

    return (
        <div className="game-overview-right-panel-container">
            <div className="main-screenshot-container">
                {gameDataScreenshots.results[0] ? getMainScreenshot(gameDataScreenshots.results[0].image) : <p>{loadingWaiter}</p>}
            </div>
            <div className="other-screenshot-container">
                {gameDataScreenshots.results.slice(1, 4).map(screenshotData => (
                    <div>
                        <img className="other-screenshot" src={screenshotData.image}/>
                    </div>
                ))}
                <div className="other-screenshot-with-read-more">
                    <img className="other-screenshot" src={gameDataScreenshots.results[4] ? gameDataScreenshots.results[4].image : GamePlaceholder}/>
                    <Link to={'/game/' + gameData.name.replace(/\s+/g, '-').toLowerCase() + '/screenshots'}>
                        <div className="read-more-wrapper">
                            <p>view all</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="store-buttons-container">
                <h2>Where to buy</h2>
                <div className="buttons-wrapper">
                    {gameDataStores.map(storesData => (
                        getStoreButton(storesData.store.name)
                    ))}
                </div>
            </div>
        </div>
    )
}
