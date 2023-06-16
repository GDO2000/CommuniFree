import { useState } from "react";





interface ModalProps {
    setOpenModal: (open: boolean) => void;
    handlePostClick: () => void;

}

export default function PostButton ({ setOpenModal, handlePostClick }:ModalProps){

    return(
        <>
        <button onClick={handlePostClick} >
            Add Post
            </button>
        </>
    )
}