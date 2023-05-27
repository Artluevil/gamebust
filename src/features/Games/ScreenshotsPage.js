import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectScreenshots } from './gamesSlice'
import { getScreenshots, selectScreenshotData, selectScreenshotStatus, selectCurrentGame } from './ScreenshotSlice'

export default function ScreenshotsPage() {


    const dispatch = useDispatch()

    const screenshotsData = useSelector(selectScreenshotData)
    const screenshotStatus = useSelector(selectScreenshotStatus)
    const currentGame = useSelector(selectCurrentGame)

    function handleLoadScreenshots() {
        console.log('Game data status: ' + screenshotStatus)
        if (screenshotStatus === 'loading') {
            return <p>Loading...</p>
        } else if (screenshotStatus === 'success') {
            return screenshotsData.results.map(result => <div className="screenshot-wrapper"><img className="game-screenshot" src={result.image}/></div>)
        } else if (screenshotStatus === 'failed') {
            return <p>Data loading failed</p>
        }
    }

    function getGameSlug(){

    }

    useEffect(() => {
        dispatch(getScreenshots())
    }, [currentGame])

    return (
        <div>
            <div className="screenshot-container">
                {handleLoadScreenshots()}
            </div>
        </div>
    )

    //{screenshotsData.results.map(result => <div className="screenshot-wrapper"><img className="game-screenshot" src={result.image}/></div>)}
}
