import Post from "./Post";
import './Feed.css';
import {useState, useEffect} from 'react';
import React from "react";
import supabase from '../../../utils/supabaseClient'


export default function Feed ({setSearch, handleClick,posts,setPosts}) {


const [fetchError, setFetchError] = useState<string | null>(null);


useEffect(() => {
    const fetchPosts = async() => {
    const {data, error} = await supabase
    .from('post_info')
    .select()

    if (error){
        setFetchError('Could not fetch any posts')
        setPosts([])
        console.log(error)
    }

    if (data){
        console.log(data)
        setPosts(data)
        console.log(posts)

        setFetchError(null)
    }
}

fetchPosts()

}, [] )

     return (
    <>
        {fetchError && (<p>{fetchError}</p>)}
        {posts && (
            <div className= 'postGrid'>
                {posts.map(post => (
                 <Post key={post.post_id} post={post}/>   
                ))}
            </div>
        )}
    </>
    )
}
