import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchGames, setSearch, setStartSearch, setData } from './searchSlice'
import { selectDataSearch, selectDataStatus, selectDataSearchWord, selectStartSearch } from './searchSlice'
import SearchResults from './SearchResults'
import uniqid from 'uniqid';

export default function SearchEngine() {

    const dispatch = useDispatch()

    const searchData = useSelector(selectDataSearch)
    const searchStatus = useSelector(selectDataStatus)
    const searchInput = useSelector(selectDataSearchWord)
    const startSearch = useSelector(selectStartSearch)


    useEffect(() => {
            if(searchInput.length > 2) {
                dispatch(searchGames())
            }
    }, [searchInput])

    function handleLoadSearches() {
        if (searchStatus === 'loading') {
            return <p>Loading...</p>
        } else if (searchStatus === 'success') {
            if(startSearch){
                return searchData.results.map(search => (
                    <SearchResults searchData={search} key={uniqid()}/>
                ))
            }
        } else if (searchStatus === 'failed') {
            return <p>Data loading failed</p>
        }
    }

    function clearSearch() {
        dispatch(setStartSearch(false))
        dispatch(setSearch(""))
    }
    //
    return (
        <div className="search-engine-container">
            <div>
            <input placeholder="Search games" value={searchInput} onChange={(e) => handleSearch(e)}/>
            <button className="close-search-btn" onClick={() => clearSearch()}>
                <span className="close-search-btn-icon"></span>
            </button>
            </div>
            <div className="search-bar">
            {handleLoadSearches()}
            </div>
        </div>
    )

    function handleSearch(e) {
        dispatch(setSearch(e.target.value))
        if (e.target.value.length > 2) {
            dispatch(setStartSearch(true))
        } else {
            dispatch(setStartSearch(false))
        }
    }
}
