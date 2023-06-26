import Comment from './Comment'
import './PostPopup.css'
import { useState,useEffect} from 'react'
import { createClient } from '@supabase/supabase-js'

export default function PostPopup({handleDeleteClick,post,comments}) {

        
    return(
        <div className='postPopup'>
            
            <div className="productSection">
       
            <div className='productImage'>
            <img className="image"src={post.image}/>
            </div>
           
            <div className='productInfo'>
            
            <h1 className='postTitle'>{post.title}</h1>
            <h3 className='postLocation'>{post.location}</h3>
            <p>{post.description}</p>
        </div>
            <div className='closeButton'>
                <button className= "closePopUp" onClick={handleDeleteClick}>X</button>
            </div>
       
        </div>
        <div className='commentSection'>
            <h1 className='commentSectionHeading'>Comments:</h1>
            <div className="searchbar">
            <input className='commentInput' placeholder="What are your thoughts?" type='text'></input>
            <button className='sendButton' ><img src='/SendIcon.png' width='25' height='20' alt=''/></button>
            </div>
            
            <Comment comments={comments}/>
            
        </div>
        </div>
    );
}