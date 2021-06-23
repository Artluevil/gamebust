import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { selectDataGames, selectDataStatus } from './gamesSlice'

export default function GameCard() {

    const gamesData = useSelector(selectDataGames)
    const dataStatus = useSelector(selectDataStatus)

    const [imageLoaded, setImageLoaded] = useState(false)

    function handleLoadData() {
        if(dataStatus === 'loading') {
            return <p>Loading</p>
        } else if(dataStatus === 'success') {
            return gamesData.results.map(game => (
                <div className="game-card-container" key={game.id}>
                    <img onLoad={() => setImageLoaded(true)} className="game-pic" src={game.background_image} style={imageLoaded ? {} : {display: 'none'}}/>
                    {imageLoaded ? <div className="text-container">
                        <p>{game.name}</p>
                    </div> : null}
                </div>
            ))
        } else if(dataStatus === 'failed') {
            return <p>Data loading failed</p>
        }
    }

    return (
        <div>
            <div>
                {handleLoadData()}
            </div>
        </div>
    )
}
