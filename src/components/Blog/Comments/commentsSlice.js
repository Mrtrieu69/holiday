import { createSlice } from "@reduxjs/toolkit"

import comments from "./commentsData"

const commentsSlice = createSlice({
    name: "comments",
    initialState: comments,
    reducers: {
        addComment: (state, action) => {
            state.push(action.payload)
        },
        addReply: (state, action) => {
            const newState = JSON.parse(JSON.stringify(state))
            const updateReplier = newState.find(user => user.name === action.payload.reply)
            updateReplier.replier.push(action.payload)
            return  newState.reduce((result, user) => user.name === updateReplier.name ? [...result, updateReplier] : [...result, user], [])
        }
    }
})

const { actions, reducer } = commentsSlice

export const { addComment, addReply } = actions

export default reducer