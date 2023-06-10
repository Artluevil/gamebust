import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setGamesDates, setPage, setMetacriticScore } from './gamesSlice'
import getDate from './functions/getDate'
import fireIcon from '../../images/fire_icon.png'
import starIcon from '../../images/star_icon.png'
import binocularIcon from '../../images/binocular_icon.png'
import calendarIcon from '../../images/calendar_icon.png'
import growthIcon from '../../images/growth_icon.png'
import trophyIcon from '../../images/trophy_icon.png'
import crownIcon from '../../images/crown_icon.png'

export default function LeftPanel() {

    const dispatch = useDispatch()

    return (
        <div className="left-panel-container">
            <div className="new-release-container">
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}><h2>Home</h2></Link>
                <h2>Releases</h2>
                <div className="options-wrapper">
                    <div className="option-container" onClick={() => setGamesDatesWeek()}>
                        <img src={starIcon}/>
                        <p className="option">Last week</p>
                    </div>
                    <div className="option-container" onClick={() => setGamesDates30days()}>
                        <img src={fireIcon}/>
                        <p className="option">Last 30 days</p>
                    </div>
                    <div className="option-container" onClick={() => setGamesDatesNewRealesesYear()}>
                        <img src={binocularIcon}/>
                        <p className="option">New realeses this year</p>
                    </div>
                    <div className="option-container">
                        <img src={calendarIcon}/>
                        <p className="option">Release calendar</p>
                    </div>
                    <h2>Top</h2>
                    <div className="option-container" onClick={() => setGamesDatesWeek()}>
                        <img src={crownIcon}/>
                        <p className="option" onClick={() => setGamesMetacritic()}>Best of the year</p>
                    </div>
                    <div className="option-container" onClick={() => setGamesDatesWeek()}>
                        <img src={growthIcon}/>
                        <p className="option" onClick={() => setGamesPopular2022()}>Popular in 2022</p>
                    </div>
                    <div className="option-container" onClick={() => setGamesDatesWeek()}>
                        <img src={trophyIcon}/>
                        <p className="option" onClick={() => setGamesPopularAllTime()}>All time best</p>
                    </div>
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
