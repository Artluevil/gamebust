import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import getIcon from './functions/getIcon'
import getMetaColor from './functions/getMetaColor'
import { nanoid } from 'nanoid'

const Card = (props) => {

    const { game, setImageLoaded, imageLoaded } = props

    const [infoVisible, setInfoVisible] = useState(false)

    function getESRB(esrb_rating) {
        if(esrb_rating === null) {
            return <p>no information</p>
        } else {
            return <p>{esrb_rating.name}</p>
        }
    }
    
    function handleInfoHover() {
        setInfoVisible(!infoVisible)
        console.log(infoVisible)
    }

    function hideInfo() {
        setInfoVisible(false)
    }

    function getGameLink(gameName) {
        let linkName = gameName
        linkName = linkName.replace(/\s+/g, '-').toLowerCase()
        return linkName
    }

    return (
        <div className="card-wrapper" onMouseEnter={hideInfo} style={{display: 'inline-block', position: 'relative'}}>
            <div onMouseOver={handleInfoHover} onMouseOut={handleInfoHover} className="game-card-container" key={game.id}>
                    <img onLoad={() => setImageLoaded(true)} className="game-pic" src={game.background_image} style={imageLoaded ? {} : {display: 'none'}}/>
                    <div className="text-container">
                        <div className="game-platform-container">
                            {game.parent_platforms.map(platformData => (
                                <div className="platform-img-container">
                                    {getIcon(platformData.platform.name)}
                                </div>
                            ))}
                        </div>
                        <Link style={{textDecoration: 'none', color: 'inherit'}} to={{pathname: '/game/' + getGameLink(game.name)}}><p className="game-name">{game.name}</p></Link>
                        <div className="game-metacritic-container">
                            <p style={getMetaColor(game.metacritic)} className="game-metacritic">{game.metacritic}</p>
                        </div>
                    </div>
            </div>
            <div onMouseOver={handleInfoHover} onMouseOut={handleInfoHover} className="hover-container">
                        <div className={infoVisible ? "hover-info-vis" : "hover-info-invis"}>
                            <div className="released-container">
                                <p className="released-text">Released date:</p>
                                <p className="released-date">{game.released}</p>
                            </div>
                            <div className="genres-container">
                                <p className="genre-text">Genres: </p>
                                <div className="genre-name-container">
                                    {game.genres.map(genre => (
                                        <p className="genre-name">{genre.name}</p>
                                    ))}
                                </div>
                            </div>
                            <div className="esrb-container">
                                <p className="esrb-text">ESRB rating: </p>
                                <p className="esrb-rating">{getESRB(game.esrb_rating)}</p>
                            </div>
                            <div className="show-more-container">
                                <div className="text-wrapper">
                                    <p className="text">Show more like this</p>
                                </div>
                            </div>
                        </div>
                    </div>
        </div>
    )
}

export default Card