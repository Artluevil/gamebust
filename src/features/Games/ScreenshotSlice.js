import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import produce from "immer";


const initialState = {
    currentGame: '',
    screenshotsData: [],
    screenshotsStatus: 'idle',
}

export const getScreenshots = createAsyncThunk('screenshots/getScreenshots', (arg, {getState}) => {
    //console.log(getState().games.page)
    console.log('fetch fired - screenshots')
    return fetch('https://api.rawg.io/api/games/'+ getState().screenshots.currentGame + '/screenshots?key=3dd9328ac4df40a89ea737d2070e850f')
    .then((res) =>
        res.json()
    )
})

const screenshotsSlice = createSlice({
    name: 'screenshots',
    initialState,
    reducers: {
        setCurrentGame: (state, action) => {
            state.currentGame = action.payload
        },
    },
    extraReducers: {
        [getScreenshots.pending]: (state, action) => {
            state.screenshotsStatus = 'loading'
        },
        [getScreenshots.fulfilled]: (state, { payload }) => {
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
            console.log(state.screenshotsData)
            state.screenshotsData = payload
            state.screenshotsStatus = 'success'
        },
        [getScreenshots.rejected]: (state, action) => {
            state.screenshotsStatus = 'failed'
        },
    },
})

export const selectScreenshotData = (state) => state.screenshots.screenshotsData
export const selectScreenshotStatus = (state) => state.screenshots.screenshotsStatus
export const selectCurrentGame = (state) => state.screenshots.currentGame

export const { setCurrentGame } = screenshotsSlice.actions

export default screenshotsSlice.reducer
