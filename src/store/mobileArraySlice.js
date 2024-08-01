import { createSlice } from "@reduxjs/toolkit";

const mobileArraySlice = createSlice({
    name: 'mobileArray',
    initialState: [],
    reducers: {
        setMobileArray: (state, action) => {
            return action.payload;
        }
    }
})

export default mobileArraySlice;
export const mobileArrayAction = mobileArraySlice.actions;