import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setSearch, setStartSearch } from './searchSlice'


const SearchResults = (props) => {

    const { searchData } = props
    const dispatch = useDispatch()

    function getGameLink(gameName) {
        let linkName = gameName
        linkName = linkName.replace(/\s+/g, '-').toLowerCase()
        return linkName
    }

    function clearSearch() {
        dispatch(setStartSearch(false))
        dispatch(setSearch(""))
    }

    return (
        <div className="search-result-container">
            <Link className="search-result-info" style={{ textDecoration: 'none', color: 'inherit' }} to={{ pathname: '/game/' + getGameLink(searchData.name)}} onClick={() => clearSearch()}> 
                <img className="search-result-image" src={searchData.background_image}/>
                <p className="search-result">{searchData.name}</p>
            </Link>
        </div>
    )
}

export default SearchResults