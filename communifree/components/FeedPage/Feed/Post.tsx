import './Post.css'
import React, { useState } from "react";
import PostPopup from '../PostPopup/PostPopup';

export default function Post ({post}) {

    const [modalOpen, setModalOpen] = useState(false);

    function handleDeleteClick() {
        setModalOpen(false);
    }

    return (
        <div className="post">
        <img className='postImage' src={post.image} alt='Picture of Item'/>
        <h1 className='postTitle'>{post.title}</h1>
        <h2 className='postLocation'>{post.location}</h2>
        <p className='postDescription'>{post.description}</p>
        <button>See more!</button>
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
                        setModalOpen={setModalOpen}
                        handleDeleteClick={handleDeleteClick}
                    />
                </div>
            </div>
        )}
        </div>
    )
};