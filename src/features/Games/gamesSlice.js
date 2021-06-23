import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    gameData: [],
    status: 'idle',
}

export const getGames = createAsyncThunk('games/getGames', async() => {
    return fetch('https://api.rawg.io/api/games?key=3dd9328ac4df40a89ea737d2070e850f&' + new URLSearchParams({
        page: 1
    })).then((res) =>
        res.json()
    )
})

const gamesSlice = createSlice({
    name: 'games',
    initialState,
    extraReducers: {
        [getGames.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getGames.fulfilled]: (state, { payload }) => {
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

export default gamesSlice.reducer