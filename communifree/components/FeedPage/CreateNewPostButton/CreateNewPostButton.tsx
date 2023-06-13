import Next from "next";
import React, { useState } from "react";
import Modal from "./Modal";

export default function CreatePostButton() {
    const [modalOpen, setModalOpen] = useState(false);
    
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setModalOpen(true);

    }
    
    
    return (
        <div>
            <h1>Feed</h1>
            <button className="modalButton" onClick={handleClick}>Create Listing</button>
        

        {modalOpen && <Modal setOpenModal={setModalOpen} />}
        </div>
    );
}
