import Comment from './Comment'
import './PostPopup.css'
import { useState,useEffect} from 'react'
import { createClient } from '@supabase/supabase-js'
import Comment2 from './Comment2'
import Comment3 from './Comment3'
import supabase from "../../../utils/supabaseClient"
import {v4 as uuidv4} from 'uuid';
import { useRouter } from 'next/router'

type CommentObject = {
    comment_id: uuidv4,
    customer_id: uuidv4,
    post_id: uuidv4,
    comment: string
    }

export default function PostPopup({handleDeleteClick,post,comments}) {
    const [comment, setComment] = useState("");
    const [commentError, setCommentError] = useState<string | null>(null)
    const router=useRouter();
    

    function handleCommentChange(e: {target: {value:string;}}) {
        setComment(e.target.value);
        console.log(`The location is ${comment}`)
    }

    const handleCommentClick = async()=>{
        let comment_id = uuidv4();
        let post_id = post.post_id;
        let customer_id = post.customer_id;

        if (!comment.trim()){
            setCommentError("Please fill in all the fields")
            console.log(commentError)
            return
        }
        
        
        //e.preventDefault()
       


    const { data, error } = await supabase
    .from('Comments')
    .insert([{comment_id, post_id, comment, customer_id}]);

    

    
    
    if (error) {
        console.log(error);
        // Handle the error, e.g., show an error message
        setCommentError("Please fill in all the fields")
    } 
    if(data) {
        console.log('Data inserted successfully:', data);
        setCommentError(null)
        // Handle the successful insertion, e.g., show a success message
        console.log("hello")
       
      }



    
        router.reload();
    }
        
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
            <input onChange={handleCommentChange} className='commentInput' placeholder="What are your thoughts?" type='text'></input>
            <button onClick={handleCommentClick} className='sendButton' ><img src='/SendIcon.png' width='25' height='20' alt=''/></button>
            </div>
            
            <Comment comments={comments}/>
            <Comment2 comments={comments}/>
            <Comment3 comments={comments}/>
            
        </div>
        </div>
    );
}