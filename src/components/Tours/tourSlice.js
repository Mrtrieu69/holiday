import { createSlice } from "@reduxjs/toolkit"

import toursData from "./tourList.js"

const tourSlice = createSlice({
    name: "tours",
    initialState: toursData,
    reducers: {
        sortByDate: (state) => {
            state.sort((a, b) => a.duration - b.duration)
        },
        sortByPriceLowToHight: (state) => {
            state.sort((a, b) => a.price - b.price)
        },
        sortByPriceHightToLow: (state) => {
            state.sort((a, b) => b.price - a.price)
        },
        sortByName: (state) => {
            state.sort((a, b) => {
                if(a.nameTour > b.nameTour){
                    return 1
                }
                if(a.nameTour < b.nameTour){
                    return -1
                }
                return 0
            })
        }
    }
})

const { reducer, actions } = tourSlice

export const { sortByDate, sortByName, sortByPriceHightToLow, sortByPriceLowToHight } = actions

export default reducer