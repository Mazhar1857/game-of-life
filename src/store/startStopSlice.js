import { createSlice } from "@reduxjs/toolkit";

const startStopSlice = createSlice({
    name: 'startStop',
    initialState: 'start',
    reducers: {
        toggleStartStop: (state) => {
            return state === 'start' ? 'stop' : 'start';
        }
    }
})

export default startStopSlice;
export const startStopAction = startStopSlice.actions;