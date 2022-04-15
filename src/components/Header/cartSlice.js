import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addProduct: (state, action) => {
            const newState = [...state]
            const index = newState.findIndex(product => product.id === action.payload.id)
            if(index === -1){
                newState.push(action.payload)
                return newState
            }else{
                const quantity = newState[index].quantity
                const updateProduct = {...action.payload, quantity: quantity + 1}
                newState.splice(index, 1, updateProduct)
                return newState
            }
        },
        removeProduct: (state, action) => {
            const newState = state.filter(product => product.id !== action.payload)
            return newState
        },
        updateProducts: (state, action) => {
            const newState = state.map(product => ({...product, quantity: action.payload[product.nameTour]}))
            
            return newState.filter(product => product.quantity !== 0)
        },
    }
})

const { reducer, actions } = cartSlice
export const { addProduct, removeProduct, updateProducts } = actions

export default reducer
