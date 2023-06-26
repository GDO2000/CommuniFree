import './Post.css'
import PostPopup from '../PostPopup/PostPopup';
import { useState,useEffect} from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://ukdeopjzktiqoppsbbvq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVrZGVvcGp6a3RpcW9wcHNiYnZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODYwNDE5MzAsImV4cCI6MjAwMTYxNzkzMH0.UiwFY43g8klf3t182m4kUoDlsVkci-US1gEq-INk8vk');

export default function Post ({post}) {

    const [modalOpen, setModalOpen] = useState(false);
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

    function handleDeleteClick() {
        setModalOpen(false);
    }
    function handleClick() {
        setModalOpen(true);
    }

    return (
        <div className="post">
        <img className='postImage' src={post.image} alt='Picture of Item'/>
        <h1 className='postTitle'>{post.title}</h1>
        <h2 className='postLocation'>{post.location}</h2>
        <p className='postDescription'>{post.description}</p>
        <button onClick={handleClick}>See more!</button>
        {modalOpen && (
            <div className="modal-overlay">
                <div className="modal-content">
                    <span
                        className="modal-close"
                        onClick={handleDeleteClick}
                    >
                        &times;
                    </span>
                    <PostPopup
                        handleDeleteClick={handleDeleteClick}
                        post={post}
                        comments={comments}
                    />
                </div>
            </div>
        )}
        </div>
    )
};