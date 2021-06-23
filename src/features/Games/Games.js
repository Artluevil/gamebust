import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getGames } from './gamesSlice'
import GameCard from './GameCard'
import '../../styles/style.css'

export default function Games() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGames())
    }, [])

    return (
        <div className="games-cards-container">
            <p>Hello</p>
            <div>
                <GameCard />
            </div>
        </div>
    )
}
