import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../components/Header/cartSlice"
import tourReducer from "../components/Tours/tourSlice"
import commentsReducer from "../components/Blog/Comments/commentsSlice"

const rootReducer = {
    cart: cartReducer,
    tours: tourReducer,
    comments: commentsReducer
}

const store = configureStore({
    reducer: rootReducer
})

export default store
