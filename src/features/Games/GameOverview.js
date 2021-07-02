import React, { useEffect } from 'react'
import getIcon from './functions/getIcon'

const GameOverview = (props) => {

    const { gameData } = props.location.state

    useEffect(() => {
        console.log(props.location.state.gameData)
    }, [])

    return (
        <div className="game-overview-container">
            <div className="image-container">
                <div className="image-wrapper">
                    <img src={gameData.background_image}/>
                    <div className="image-overlay"></div>
                </div>
            </div>
            <div className="game-overview-content">
                <p className="game-overview-text">Game Overview</p>
                <div className="released-and-platform">
                    <p className="release-text">{gameData.released}</p>
                    <div className="platform-container">
                        {gameData.parent_platforms.map(platformData => (
                            <div>
                                {getIcon(platformData.platform.name)}
                            </div>
                        ))}
                    </div>
                    <p className="average-text">Average playtime: {gameData.playtime}</p>
                </div>
                <p className="game-name">{gameData.name}</p>
            </div>
        </div>
    )
}

export default GameOverview
