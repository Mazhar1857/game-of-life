import { createSlice } from "@reduxjs/toolkit";

const clearSlice = createSlice({
    name: 'clear',
    initialState: 'clear',
    reducers: {
        toggleclearRest: (state) => {
            return state === 'clear' ? 'reset' : 'clear';
        }
    }
})

export default clearSlice;
export const clearAction = clearSlice.actions