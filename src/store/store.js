import { configureStore } from "@reduxjs/toolkit";
import explanationSlice from "./explanationSlice";
import startStopSlice from "./startStopSlice";
import clearSlice from "./clearSlice";
import arraySlice from "./arraySlice";
import mobileArraySlice from "./mobileArraySlice";


const store = configureStore({
    reducer: {
        explanation: explanationSlice.reducer,
        startStop: startStopSlice.reducer,
        clear: clearSlice.reducer,
        array: arraySlice.reducer,
        mobileArray: mobileArraySlice.reducer
    }
})

export default store;