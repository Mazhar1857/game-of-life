import { configureStore } from "@reduxjs/toolkit";
import explanationSlice from "./explanationSlice";
import startStopSlice from "./startStopSlice";
import clearSlice from "./clearSlice";
import arraySlice from "./arraySlice";


const store = configureStore({
    reducer: {
        explanation: explanationSlice.reducer,
        startStop: startStopSlice.reducer,
        clear: clearSlice.reducer,
        array: arraySlice.reducer
    }
})

export default store;