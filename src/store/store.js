import { configureStore } from "@reduxjs/toolkit";
import { imagesDesktopReducer } from "../slices/imagesDesktop";


export const store = configureStore({
    reducer: imagesDesktopReducer
});