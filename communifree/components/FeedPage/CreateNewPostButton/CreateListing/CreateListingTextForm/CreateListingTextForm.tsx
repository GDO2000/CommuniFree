import { useState } from "react";
import { useEffect } from "react";
import './CreateListingTextForm.css'
import Head from "next/head";

interface ModalProps {
    setOpenModal: (open: boolean) => void;
    handleDeleteClick: () => void;
}

type postObject = {
    title: string,
    description: string,
    condition: string,
    contact: string
    [key: string]: any;
    }



export default function Modal({ setOpenModal, handleDeleteClick }:ModalProps) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [condition, setCondition] = useState("");
    const [contact, setContact] = useState("");
  
    function handleTitleChange(e: {target: {value:string;}}) {
        setTitle(e.target.value);
        console.log(`The title is ${title}`)
    }
    function handleDescriptionChange(e: {target: {value:string;}}) {
        setDescription(e.target.value);
        console.log(`The description is ${description}`)
    }
    function handleConditionChange(e: {target: {value:string;}}) {
        setCondition(e.target.value);
        console.log(`The condition is ${condition}`)
    }
    function handleContactChange(e: {target: {value:string;}}) {
        setContact(e.target.value);
        console.log(`The contact details are ${contact}`)
    }
      

    async function handlePostClick(){
        let obj : postObject ={
            title,
            description,
            condition,
            contact,
        }
        let newData = [...dummyData,obj]
        setdummyData(newData)
        setOpenModal(false);
    }
    

    // interface ModalProps {
    //     setOpenModal: (open: boolean) => void;
    //     handleDeleteClick: () => void;
    // }

    return(
        <div id='popup'>
        
        <Head><link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap" rel="stylesheet"></link>
        </Head>

        <div className="modalBackground">
            <h1 id="createListingH1">Create a listing:</h1>
            <br></br>
        <form>
            <label>Give your listing a title :</label>
            <input className="createpostinput" placeholder="e.g. 10 Carrots" type = "text" onChange={handleTitleChange}/><br></br>
            <label>Describe your product:</label>
            <textarea placeholder="e.g. Ready for collection" rows= {5} cols= {104} onChange={handleDescriptionChange} /><br></br>
            <label>What is the condition of your product:</label>
            <input className="createpostinput" placeholder="Select an option" type = "list" onChange={handleConditionChange} /><br></br>
            <label>Please enter a contact number or email address:</label>
            <input className="createpostinput" placeholder="Examplemail@example.co.uk" type = "text" onChange={handleContactChange} /><br></br>
            <button id= 'cancelbutton' onClick={handleDeleteClick} /*setOpenModal={setOpenModal}*/>Cancel</button>
            <button id= 'postbutton' /*setOpenModal={setOpenModal}*/ onClick={handlePostClick}>Post!</button>
        </form> 
        </div>
        </div>
    )

}