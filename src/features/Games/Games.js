import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames, selectPage, searchGames, selectDates } from './gamesSlice'
import GameCard from './GameCard'

export default function Games() {

    const dispatch = useDispatch()

    const currentPage = useSelector(selectPage)
    const currentGameDates = useSelector(selectDates)

    useEffect(() => {
        dispatch(getGames())
        
    }, [currentPage, currentGameDates])


    return (
        <div className="games-cards-container">
            <div>
                <GameCard />
            </div>
        </div>
    )
}
