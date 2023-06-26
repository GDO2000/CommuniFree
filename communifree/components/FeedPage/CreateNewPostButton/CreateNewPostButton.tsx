
import Next from "next";
import React, { useState } from "react";
import Modal from "./CreateListing/CreateListingTextForm/CreateListingTextForm";
import './CreateNewPostButton.css'
import { useRouter } from "next/router";


export default function CreatePostButton() {
    const [modalOpen, setModalOpen] = useState(false);
    const [buttonVisible, setButtonVisible] = useState(true)
    const router = useRouter()
    
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setModalOpen(true);
        setButtonVisible(false);
        
    }

    function handleDeleteClick() {
        setModalOpen(false);
        
        router.reload();

    }

    return (
        <div>
            
            {buttonVisible &&<button className="modalButton button" onClick={handleClick}>Create Listing</button>}
           
        {modalOpen && <Modal setOpenModal={setModalOpen} handleDeleteClick={handleDeleteClick} />}
            
        {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span
                            className="modal-close"
                            onClick={handleDeleteClick}
                        >
                            &times;
                        </span>

                      
                        <Modal
                            setOpenModal={setModalOpen}
                            handleDeleteClick={handleDeleteClick}
                        />
                    </div>
                </div>
            )}
        </div>
    );
  }
