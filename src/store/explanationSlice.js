import { createSlice } from "@reduxjs/toolkit";

const explanationSlice = createSlice({
    name: 'explanation',
    initialState: 'close',
    reducers: {
        toggleExplanation: (state) => {
            return state === 'close' ? 'open' : 'close';
        }
    }
})

export default explanationSlice;
export const explanationAction = explanationSlice.actions;