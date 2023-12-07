import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./features/username/nameSlice"


export const Store = configureStore({
    reducer: {
        user: userReduser,
    },

});