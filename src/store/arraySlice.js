import { createSlice } from "@reduxjs/toolkit";


const arraySlice = createSlice({
    name: 'array',
    initialState: [],
    reducers: {
        setArray: (state, action) => {
            return action.payload
        }
    }
})

export default arraySlice;
export const arrayAction = arraySlice.actions; 