import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGames, selectPage } from './gamesSlice'
import GameCard from './GameCard'
import '../../styles/style.css'

export default function Games() {

    const dispatch = useDispatch()

    const currentPage = useSelector(selectPage)

    useEffect(() => {
        dispatch(getGames())
    }, [currentPage])

    return (
        <div className="games-cards-container">
            <div>
                <GameCard />
            </div>
        </div>
    )
}
