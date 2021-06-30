import React from 'react'
import { nanoid } from 'nanoid'

const CardHover = (props) => {

    const { game, handleInfoHover, setImageLoaded, getIcon, getMetaColor, imageLoaded } = props

    return (
            <div onMouseEnter={() => handleInfoHover()} onMouseLeave={() => handleInfoHover()} className="game-card-container" key={game.id}>
                    <img onLoad={() => setImageLoaded(true)} className="game-pic" src={game.background_image} style={imageLoaded ? {} : {display: 'none'}}/>
                    {imageLoaded ? 
                    <div className="text-container">
                        <div className="game-platform-container">
                            {game.parent_platforms.map(platformData => (
                                <div key={nanoid(6)} className="platform-img-container">
                                    {getIcon(platformData.platform.name, game)}
                                </div>
                            ))}
                        </div>
                        <p className="game-name">{game.name}</p>
                        <div className="game-metacritic-container">
                            <p style={getMetaColor(game.metacritic)} className="game-metacritic">{game.metacritic}</p>
                        </div>
                    </div> : null}
                    <div>
                        <p>Hover</p>
                    </div>
            </div>
    )
}

export default CardHover