import React from 'react'
import { nanoid } from 'nanoid'

const Card = (props) => {

    const { game, handleInfoHover, setImageLoaded, getIcon, getMetaColor, imageLoaded } = props

    function getESRB(esrb_rating) {
        if(esrb_rating === null) {
            return <p>no information</p>
        } else {
            return <p>{esrb_rating.name}</p>
        }
    }

    return (
            <div className="game-card-container" key={game.id}>
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
                    <div className="hover-container">
                        <div className="hover-info">
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
                        </div>
                    </div>
            </div>
    )
}

export default Card