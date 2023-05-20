import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setGamesDates, setPage } from './gamesSlice'

export default function LeftPanel() {

    const dispatch = useDispatch()

    return (
        <div className="left-panel-container">
            <div className="new-release-container">
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
                    <p className="option">Best of the year</p>
                    <p className="option">Popular in 2020</p>
                    <p className="option">All time top 250</p>
                </div>
            </div>
        </div>
    )

    function getDate(period){
        const date = new Date();
        let currentDay = String(date.getDate()).padStart(2, '0');
        let lastWeekDay = String(date.getDate() - 7).padStart(2, '0');
        let currentMonth = String(date.getMonth() + 1).padStart(2, "0");
        let currentYear = date.getFullYear();
        let monthBack = String(date.getMonth()).padStart(2, "0")
        let dateMonthBack = `${currentYear}-${monthBack}-${currentDay}`
        let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
        if(period == "Month") {
            return dateMonthBack + ',' + currentDate
        }
        if(period == "Week") {
            if(date.getDate() <= 7 ) {
                let remaining_days = 7 - date.getDate();
                let prev_month_days = 30 - remaining_days;
                return `${currentYear}-${currentMonth}-${prev_month_days}` + ',' + currentDate 
            } else {
                let lastWeekDate = `${currentYear}-${currentMonth}-${lastWeekDay}`;
                return lastWeekDate + ',' + currentDate 
            }
        }
        if(period == "New_this_year") {
            return currentDate + ',' + `${currentYear}-${'12-31'}`;
        }
    }

    getDate("Week")

    function setGamesDates30days() {
        dispatch(setGamesDates(getDate("Month")))
        dispatch(setPage(1))
    }

    function setGamesDatesWeek() {
        dispatch(setGamesDates(getDate("Week")))
        dispatch(setPage(1))
    }

    function setGamesDatesNewRealesesYear() {
        dispatch(setGamesDates(getDate("New_this_year")))
        dispatch(setPage(1))
    }

}
