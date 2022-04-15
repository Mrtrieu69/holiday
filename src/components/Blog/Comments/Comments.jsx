import React, { useCallback, useState } from 'react'
import { useSelector } from 'react-redux'

import Comment from './Comment'
import Form from './Form'

const Comments = () => {
    const [postComment, setPostComment] = useState(null)

    const comments = useSelector(state => state.comments)
    

    const handleClickReply = useCallback((id) => {
        setPostComment(id)
    }, [])

    return (
        <div id="comments" className='comments'>
            <h3 className='comments__title'>Comments</h3>
            <ul className='comments__list'>
                {comments.map((item) => (<Comment postComment={postComment} onReply={handleClickReply} key={item.id} {...item} />))}
            </ul>
            {!postComment && (<Form />)}
        </div>
    )
}

export default Comments
