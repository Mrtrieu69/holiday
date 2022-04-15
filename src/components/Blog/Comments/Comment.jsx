import React, { memo } from 'react'

import Form from './Form'

const Comment = ({postComment, onReply, ...comment}) => {
    const { replier } = comment


    return (
        <li className='comments__item--block'>
            <div className='comments__item'>
                <div className="comments__item-image">
                    <img src={comment.image} alt="" />
                </div>
                <div className="comments__item-content">
                    <div className="comments__item-heading">
                        <h3 className="comments__item-name">{comment.name}</h3>
                        <button className='comments__item-reply' onClick={() => onReply(comment.id)}>reply</button>
                    </div>
                    <p className='comments__item-text'>{comment.content}</p>
                    <p className='comments__item-date'>{comment.date}</p>
                </div>
            </div>
            {replier.length > 0 && (
                <ul className='comments__list comments__list--reply'>
                    {replier.map(item => (
                        <li key={item.id} className='comments__item'>
                            <div className="comments__item-image">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="comments__item-content">
                                <div className="comments__item-heading">
                                    <h3 className="comments__item-name">{item.name}</h3>
                                </div>
                                <p className='comments__item-text'>{item.content}</p>
                                <p className='comments__item-date'>{item.date}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            {postComment === comment.id && (<Form reply={comment.name} onReply={onReply}/>)}
        </li>
    )
}

export default memo(Comment)
