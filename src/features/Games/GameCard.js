import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDataGames, selectDataStatus, setPage, selectPage } from './gamesSlice'
import PCicon from '../../images/windows.png'
import PlayStationIcon from '../../images/playstation.png'
import IoS from '../../images/ios.png'
import Linux from '../../images/linux.png'
import XBOX from '../../images/xbox.png'
import Nintendo from '../../images/nintendo.png'
import Android from '../../images/android.png'
import { nanoid } from 'nanoid'
import Card from './Card'

export default function GameCard() {

    const dispatch = useDispatch()

    const gamesData = useSelector(selectDataGames)
    const dataStatus = useSelector(selectDataStatus)
    const currentPage = useSelector(selectPage)

    const [imageLoaded, setImageLoaded] = useState(false)
    const [infoVisible, setInfoVisible] = useState([false])

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

    function handleInfoHover() {
        setInfoVisible(!infoVisible)
    }


    function handleLoadData() {
        if(dataStatus === 'loading') {
            return <p>Loading...</p>
        }else if(dataStatus === 'success') {
            return gamesData.results.map(game => (
                <Card game={game} getMetaColor={getMetaColor} getIcon={getIcon} setImageLoaded={setImageLoaded} handleInfoHover={handleInfoHover} imageLoaded={imageLoaded}/>
            ))
        } else if(dataStatus === 'failed') {
            return <p>Data loading failed</p>
        }
    }

    function handleLoadSwitchButtons() {
        if(dataStatus === 'success') {
            return <div className="page-switch-container">
                        <p onClick={() => handlePreviousPage()}>Previous Page</p>
                        <p onClick={() => handleNextPage()}>Next Page</p>
                    </div>
        }
    }

    function handleNextPage() {
        dispatch(setPage(currentPage + 1))
    }
    
    function handlePreviousPage() {
        if(currentPage !== 1) {
            dispatch(setPage(currentPage - 1))
        }
    }

    return (
        <div>
            <div>
                {handleLoadData()}
                {handleLoadSwitchButtons()}
            </div>
        </div>
    )
}
