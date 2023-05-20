import { createSlice, createAsyncThunk, getDefaultMiddleware, current } from "@reduxjs/toolkit";
import produce from "immer";


const initialState = {
    gameData: [],
    gameScreenshots: [],
    gameTrailers: [],
    status: 'idle',
    page: 1,
    LastMonthResults: true,
    dates: '',
}

export const getGames = createAsyncThunk('games/getGames', (arg, {getState}) => {
    //console.log(getState().games.page)
    console.log('fetch fired')
    if(getState().games.LastMonthResults) {
        return fetch('https://api.rawg.io/api/games?key=3dd9328ac4df40a89ea737d2070e850f&' + new URLSearchParams({
            page: getState().games.page,
            //'2020-12-01,2020-12-31'
            dates: getState().games.dates
        })).then((res) =>
            res.json()
        )
    } else {
        return fetch('https://api.rawg.io/api/games?key=3dd9328ac4df40a89ea737d2070e850f&' + new URLSearchParams({
            page: getState().games.page
        })).then((res) =>
            res.json()
        )
    }
})
const gamesSlice = createSlice({
    name: 'games',
    initialState,
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        },
        setScreenshots: (state, action) => {
            state.gameScreenshots = action.payload
        },
        setTrailer: (state, action) => {
            state.gameTrailers = action.payload
        },
        setGamesDates: (state, action) => {
            state.dates = action.payload
        },
    },
    extraReducers: {
        [getGames.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getGames.fulfilled]: (state, { payload }) => {
            // if(state.page !== 1) {
            //     const nextState = produce(state.gameData.results, draftState => {
            //         draftState.push(...payload.results)
            //     })
            //     state.gameData.results = nextState
            //     state.status = 'success'
            // } else {
            //     state.gameData = payload
            //     state.status = 'success'
            // }
            state.gameData = payload
            state.status = 'success'
        },
        [getGames.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
})

export const selectDataGames = (state) => state.games.gameData
export const selectDataStatus = (state) => state.games.status
export const selectPage = (state) => state.games.page
export const selectDates = (state) => state.games.dates

export const { setPage } = gamesSlice.actions
export const { setScreenshots } = gamesSlice.actions
export const { setTrailers } = gamesSlice.actions
export const { setGamesDates } = gamesSlice.actions 

export default gamesSlice.reducer
