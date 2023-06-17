import React from 'react'
import { useState } from 'react';
import mobileMenuIcon from '../../images/mobile_menu_btn.png'
import closeBtn from '../../images/close_btn.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setGamesDates, setPage, setMetacriticScore } from './gamesSlice'
import getDate from './functions/getDate'

export default function MobileMenu() {

    const [isActive, setActive] = useState(false);

    const toggleClass = () => {
      setActive(!isActive);
    };

    const dispatch = useDispatch()

    return (
        <div className="mobile-menu">
            <div className="mobile-menu-btn-container">
                <img className="mobile-menu-btn" src={mobileMenuIcon} onClick={() => toggleClass()} />
            </div>
            <div className={isActive ? 'mobile-menu-container' : 'mobile-menu-container-hidden'}>
                <img className="close-icon" src={closeBtn} onClick={() => toggleClass()} />
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}><h2>Home</h2></Link>
                <h2>Releases</h2>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}} onClick={() => setGamesDatesWeek()}>Last week</p>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}} onClick={() => setGamesDates30days()}>Last 30 days</p>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}} onClick={() => setGamesDatesNewRealesesYear()}>new realeses this year</p>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}}>Release calendar</p>
                </Link>
                <h2>Top</h2>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}} onClick={() => setGamesMetacritic()}>Best of the year</p>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}} onClick={() => setGamesPopular2022()}>Popular in 2022</p>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/' }}>
                    <p style={{cursor: 'pointer'}} onClick={() => setGamesPopularAllTime()}>All time best</p>
                </Link>
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