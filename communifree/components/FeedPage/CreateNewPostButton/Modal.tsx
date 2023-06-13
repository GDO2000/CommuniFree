import { useState } from "react";

interface ModalProps {
    setOpenModal: (open: boolean) => void;
}



export default function Modal({ setOpenModal }:ModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [condition, setCondition] = useState("");
    const [contact, setContact] = useState("");

    function handleTitleChange(e: {target: {value:string;}}) {
        setTitle(e.target.value);
    }
    function handleDescriptionChange(e: {target: {value:string;}}) {
        setDescription(e.target.value);
    }
    function handleConditionChange(e: {target: {value:string;}}) {
        setCondition(e.target.value);
    }
    function handleContactChange(e: {target: {value:string;}}) {
        setContact(e.target.value);
    }
    
    




    return(
        <div className="modalBackground">
            Title:<input onChange={handleTitleChange}/>
            Description:<input onChange={handleDescriptionChange} />
            Condition:<input onChange={handleConditionChange} />
            Contact:<input onChange={handleContactChange} />
            <button onClick={() => {
              setOpenModal(false);
              console.log("working");
            }}>
            </button>








        </div>
    )




}