
import Next from "next";
import React, { useState } from "react";
import Modal from "./CreateListing/CreateListingTextForm/CreateListingTextForm";
import './CreateNewPostButton.css'

export default function CreatePostButton() {
    const [modalOpen, setModalOpen] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true)
    
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setModalOpen(true);
        setButtonVisible(false)

    }
    function handleDeleteClick(){
        setModalOpen(false)
    }
    
    
    
    return (
        <div>
            
            {buttonVisible &&<button className="modalButton button" onClick={handleClick}>Create Listing</button>}
           
        {modalOpen && <Modal setOpenModal={setModalOpen} handleDeleteClick={handleDeleteClick} />}
        </div>
    );
}
