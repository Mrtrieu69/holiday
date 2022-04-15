import React, {useState} from 'react'
import { FaComment, FaUserAlt, FaEnvelope, FaBackspace } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import {useForm } from "react-hook-form"

import getDate from './getDate'
import { addComment, addReply } from "./commentsSlice"

const Form = ({reply, onReply}) => {
    const [content, setContent] = useState("")
    
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm({})


    const onSubmit = (data) => {
        const { name } = data
        if(content === "") return
        const id = Math.floor(Math.random() * 10000)
        const date = getDate()
        const image = "/users/user-default.png"
        if(reply){
            dispatch(addReply({id, name, content, image, date, reply}))
            onReply(null)
        }else{
            dispatch(addComment({id, name, content, image, date, replier: []}))
        }
        setContent("")
    };


    return (
        <form onSubmit={handleSubmit(onSubmit)} action="" className={`comments__form ${reply ? "comments__form--reply" : ""}`}>
            <h3 className={`comments__form-title ${reply ? "comments__form-title--reply" : ""}`}>
                {reply ? 
                    <>
                        Reply to {reply}
                        <FaBackspace onClick={() => onReply(null)} className='comments__form-title-icon'/>
                    </> : 
                    <>
                        Post a Comment
                    </>
                }
            </h3>
            <div className="comments__form-group">
                <FaComment className='comments__form-group-icon'/>
                <textarea className='comments__form-group-inputArea' value={content} onChange={(e) => setContent(e.target.value)} placeholder='Comment'></textarea>
            </div>
            <div className='comments__form-block'>
                <div className={`comments__form-group ${errors?.name ? "comments__form-group--error" : ""}`}>
                    <FaUserAlt className='comments__form-group-icon'/>
                    <input type="text" placeholder='Name*' {...register("name", { required: true })} className='comments__form-group-input'/>
                    {errors.name && <p className='comments__form-group-message'>This field is required</p>}
                </div>
                <div className={`comments__form-group ${errors?.email ? "comments__form-group--error" : ""}`}>
                    <FaEnvelope className='comments__form-group-icon'/>
                    <input type="email" placeholder='Email*' {...register("email", { required: true })} className='comments__form-group-input'/>
                    {errors.email && <p className='comments__form-group-message'>This field is required</p>}
                </div>
            </div>
            <button className='comments__form-submit'>SUBMIT</button>
        </form>
    )
}

export default Form
