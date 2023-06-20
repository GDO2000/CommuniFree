
import Next from "next";
import React, { useState } from "react";
import Modal from "./CreateListing/CreateListingTextForm/CreateListingTextForm";
import './CreateNewPostButton.css'

// export default function CreatePostButton() {
//     const [modalOpen, setModalOpen] = useState(false);
    
//     function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
//         setModalOpen(true);

//     }
//     function handleDeleteClick(){
//         setModalOpen(false)
//     }
    
    
    
//     return (
//         <div>
//             <button className="modalButton button" onClick={handleClick}>Create Listing</button>
        

//         {modalOpen && <Modal setOpenModal={setModalOpen} handleDeleteClick={handleDeleteClick} />}
//         </div>
//     );
// }


export default function CreatePostButton() {
    const [modalOpen, setModalOpen] = useState(false);

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        setModalOpen(true);
    }

    function handleDeleteClick() {
        setModalOpen(false);
    }

    return (
        <div>
            <button className="modalButton button" onClick={handleClick}>
                Create Listing
            </button>

            {modalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span
                            className="modal-close"
                            onClick={handleDeleteClick}
                        >
                            &times;
                        </span>

                        {/* add your modal content here */}
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