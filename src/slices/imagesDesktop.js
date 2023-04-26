import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    image: 'Img1'
}

const imagesDesktopSlice = createSlice({
    name: 'imagesDesktop',
    initialState,
    reducers: {
        image1: (state => {
            return {...state, image: 'Img1'}
        }),
        image2: (state => {
            return {...state, image: 'Img2'}
        }),
        image3: (state => {
            return {...state, image: 'Img3'}
        }),
        image4: (state => {
            return {...state, image: 'Img4'}
        }),
    }
})

export const {
    image1,
    image2,
    image3,
    image4
} = imagesDesktopSlice.actions

export const imagesDesktopReducer = imagesDesktopSlice.reducer