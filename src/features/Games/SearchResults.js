import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectDataStatus } from './searchSlice'

const SearchResults = (props) => {

    const { searchData } = props

    function getGameLink(gameName) {
        let linkName = gameName
        linkName = linkName.replace(/\s+/g, '-').toLowerCase()
        return linkName
    }

    return (
        <div class="search-result-container">
            <div className="search-result-info" onClick={() => {window.location.href='/game/' + getGameLink(searchData.name)}} style={{cursor: 'pointer'}}> 
                <img className="search-result-image" src={searchData.background_image}/>
                <p class="search-result">{searchData.name}</p>
            </div>
        </div>
    )
}

export default SearchResults