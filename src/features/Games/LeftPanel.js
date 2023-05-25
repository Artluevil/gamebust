import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGamesDates, setPage, setMetacriticScore } from './gamesSlice'
import getDate from './functions/getDate'

export default function LeftPanel() {

    const dispatch = useDispatch()

    return (
        <div className="left-panel-container">
            <div className="new-release-container">
                <h2>Home</h2>
                <h2>Releases</h2>
                <div className="options-container">
                    <p className="option" onClick={() => setGamesDatesWeek()}>Last week</p>
                    <p className="option" onClick={() => setGamesDates30days()}>Last 30 days</p>
                    <p className="option" onClick={() => setGamesDatesNewRealesesYear()}>New realeses this year</p>
                    <p className="option">Release calendar</p>
                </div>
            </div>
            <div className="top-games-container">
                <h2>Top</h2>
                <div className="options-container">
                    <p className="option" onClick={() => setGamesMetacritic()}>Best of the year</p>
                    <p className="option" onClick={() => setGamesPopular2022()}>Popular in 2022</p>
                    <p className="option" onClick={() => setGamesPopularAllTime()}>All time best</p>
                </div>
            </div>
        </div>
    )


    function setGamesDates30days() {
        dispatch(setGamesDates(getDate("Month")))
        dispatch(setMetacriticScore(''))
        dispatch(setPage(1))
    }

    function setGamesDatesWeek() {
        dispatch(setGamesDates(getDate("Week")))
        dispatch(setMetacriticScore(''))
        dispatch(setPage(1))
    }

    function setGamesDatesNewRealesesYear() {
        dispatch(setGamesDates(getDate("New_this_year")))
        dispatch(setMetacriticScore(''))
        dispatch(setPage(1))
    }

    function setGamesMetacritic(){
        dispatch(setMetacriticScore('70,100'))
        dispatch(setGamesDates('2023-01-01,2023-12-31'))
    }

    function setGamesPopular2022() {
        dispatch(setGamesDates('2022-01-01,2022-12-31'))
        dispatch(setMetacriticScore('70,100'))
        dispatch(setPage(1))
    }

    function setGamesPopularAllTime() {
        dispatch(setGamesDates(''))
        dispatch(setMetacriticScore('80,100'))
        dispatch(setPage(1))
    }


}
