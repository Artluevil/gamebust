import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDataGames, selectDataStatus, setPage } from './gamesSlice'
import PCicon from '../../images/windows.png'
import PlayStationIcon from '../../images/playstation.png'
import IoS from '../../images/ios.png'
import Linux from '../../images/linux.png'
import XBOX from '../../images/xbox.png'
import Nintendo from '../../images/nintendo.png'
import Android from '../../images/android.png'

export default function GameCard() {

    const dispatch = useDispatch()

    const gamesData = useSelector(selectDataGames)
    const dataStatus = useSelector(selectDataStatus)

    const [imageLoaded, setImageLoaded] = useState(false)

    function getMetaColor(metascore) {
        if(metascore > 80) {
            return {color: '#00eb3f', border: '1px solid green'}
        } else if(metascore > 60 && metascore <= 80) {
            return {color: 'yellow', border: '1px solid yellow'}
        } else if(metascore > 40 && metascore <= 60) {
            return {color: 'orange', border: '1px solid orange'}
        } else {
            return {color: 'red', border: '1px solid red'}
        }
    }

    function getIcon(platform) {
        if(platform === 'PC') {
            return <img src={PCicon}/>
        } else if(platform === 'PlayStation') {
            return <img src={PlayStationIcon}/>
        } else if(platform === 'PlayStation') {
            return <img src={PlayStationIcon}/>
        } else if(platform === 'iOS') {
            return <img src={IoS}/>
        } else if(platform === 'Xbox') {
            return <img src={XBOX}/>
        } else if(platform === 'Nintendo') {
            return <img src={Nintendo}/>
        }else if(platform === 'Linux') {
            return <img src={Linux}/>
        }
    }

    function handleLoadData() {
        if(dataStatus === 'loading') {
            return <p>Loading</p>
        } else if(dataStatus === 'success') {
            return gamesData.results.map(game => (
                <div className="game-card-container" key={game.id}>
                    <img onLoad={() => setImageLoaded(true)} className="game-pic" src={game.background_image} style={imageLoaded ? {} : {display: 'none'}}/>
                    {imageLoaded ? 
                    <div className="text-container">
                        {/* <div className="game-platform-container">
                            {game.parent_platforms.map(platformData => (
                                getIcon(platformData.platform.name)
                            ))}
                        </div> */}
                        <p className="game-name">{game.name}</p>
                        <div className="game-metacritic-container">
                            <p style={getMetaColor(game.metacritic)} className="game-metacritic">{game.metacritic}</p>
                        </div>
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
                <p onClick={() => dispatch(setPage(1))}>Page1</p>
                <p onClick={() => dispatch(setPage(2))}>Page2</p>
            </div>
        </div>
    )
}
