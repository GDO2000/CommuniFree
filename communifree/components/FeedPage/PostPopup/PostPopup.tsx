import Comment from './Comment'
import './PostPopup.css'
import { useState,useEffect} from 'react'
import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk')
export default function PostPopup({handleDeleteClick,post}) {
    const [fetchError, setFetchError] = useState<string | null>("");
    const [comments,setComments] = useState<Comment[]>([]);
    const [filteredComments, setFilteredComments] = useState<Comment[]>([]);

    // useEffect(() => {
    //     const fetchComments = async () => {
    //       try {
            
    //         let { data, error } = await supabase
    //         .from('Comments')
    //         .select();

    //         if (error) {
    //           throw new Error("Could not fetch any comments");
    //         }
    //         console.log(data);
    //         console.log('heres the log');
    //         await setComments(data || []);
    //       } catch (error) {
    //         console.log(error);
    //         setFetchError("Could not fetch any comments");
    //       }
    //       console.log(comments);
    //     };

    //     fetchComments();

    // },[]);

    useEffect(() => {
      const fetchComments = async() => {
      const {data, error} = await supabase
      .from('Comments')
      .select()
  
      if (error){
          setFetchError('Could not fetch any posts');
          setComments([]);
          console.log(error);
      }
  
      if (data){
          console.log(data);
          setComments(data);
          console.log(comments);
  
          setFetchError(null);
      }
  }
  console.log('are we here?');
  fetchComments();
  console.log('after calling comments');
  console.log(comments);
  }, [] );
        
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