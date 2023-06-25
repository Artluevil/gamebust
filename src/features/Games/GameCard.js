import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectDataGames, selectDataStatus, setPage, selectPage } from './gamesSlice'
import uniqid from 'uniqid';
import Card from './Card'

export default function GameCard() {

    const dispatch = useDispatch()

    const gamesData = useSelector(selectDataGames)
    const dataStatus = useSelector(selectDataStatus)
    const currentPage = useSelector(selectPage)

    const [imageLoaded, setImageLoaded] = useState(false)

    function handleLoadData() {
        if (dataStatus === 'loading') {
            return <p style={{ color: 'white' }}>Loading...</p>
        } else if (dataStatus === 'success') {
            return gamesData.results.map(game => (
                <Card game={game} setImageLoaded={setImageLoaded} imageLoaded={imageLoaded} key={game.id} cardKey={uniqid.process()}/>
            ))
        } else if (dataStatus === 'failed') {
            return <p style={{ color: 'white' }}>Data loading failed</p>
        }
    }

    function handleLoadSwitchButtons() {
        if (dataStatus === 'success') {
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
        if (currentPage !== 1) {
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
