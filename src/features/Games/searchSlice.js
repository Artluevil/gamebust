import { createSlice, createAsyncThunk, getDefaultMiddleware, current } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
    searchData: [],
    searchStatus: 'idle',
    search: "",
    searchStart: false,
}

export const searchGames = createAsyncThunk('games/searchGames', (arg, {getState}) => {
    console.log(getState().search.search)
    return fetch('https://api.rawg.io/api/games?key=3dd9328ac4df40a89ea737d2070e850f&' + new URLSearchParams({
        search: getState().search.search,
        page_size: '10',
    })).then((res) =>
        res.json()
    )
})

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload
            console.log('Search input' + state.search)
        },
        setStartSearch: (state, action) => {
            state.searchStart = action.payload
        },
        setData: (state, action) => {
            state.searchData = action.payload
        },
    },
    extraReducers: {
        [searchGames.pending]: (state, action) => {
            state.searchStatus = 'loading'
        },
        [searchGames.fulfilled]: (state, { payload }) => {
            state.searchData = payload
            console.log(state.searchData)
            state.searchStatus = 'success'
        },
        [searchGames.rejected]: (state, action) => {
            state.searchStatus = 'failed'
        },
    }
})

export const selectDataSearch = (state) => state.search.searchData
export const selectDataStatus = (state) => state.search.searchStatus
export const selectDataSearchWord = (state) => state.search.search
export const selectStartSearch = (state) => state.search.searchStart

export const { setSearch, setStartSearch, setData } = searchSlice.actions
export default searchSlice.reducer