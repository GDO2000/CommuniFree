import { useState } from "react";
import PostButton from "../../PostButton/PostButton";
import DeleteButton from "../../DeleteButton/DeleteButton";
import { useEffect } from "react";
import './CreateListingTextForm.css'
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
    let exampleArray : Array<postObject> = [{
    title: "Carrots", 
    description: "good ol carrots", 
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Apples",
    description: "Crisp and juicy apples",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Bananas",
    description: "Yellow and potassium-rich bananas",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Oranges potatoes",
    description: "Citrusy oranges and potatoes",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Strawberries",
    description: "Sweet and succulent strawberries",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Grapes",
    description: "Juicy grapes in a variety of colors",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Tomatoes",
    description: "Vibrant and flavorful tomatoes",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Lettuce",
    description: "Crisp and refreshing lettuce",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Potatoes",
    description: "Versatile and hearty potatoes",
    contact: "0121",
    condition: "Good"
    },
    
    {
    title: "Cucumbers",
    description: "Cool and hydrating cucumbers",
    contact: "0121",
    condition: "Good"
    }];
    
    const [dummyData, setdummyData] = useState(exampleArray)
      

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
    

    return(
        <div className="modalBackground">
            <h1>Create a listing </h1>
            <br></br>
            <br></br>
        <form>
            Give your listing a title :<input placeholder="E.G 10 Carrots" type = "text" onChange={handleTitleChange}/>
            Describe your product:<textarea placeholder="E.G Ready for collection" rows= {5} cols= {131} onChange={handleDescriptionChange} />
            What is the condition of your product:<input placeholder="Select an option" type = "list" onChange={handleConditionChange} />

            Please enter a contact number or email address:<input placeholder="Examplemail@example.co.uk" type = "text" onChange={handleContactChange} />
            <DeleteButton setOpenModal={setOpenModal} handleDeleteClick={handleDeleteClick}/>
            <PostButton setOpenModal={setOpenModal} handlePostClick={handlePostClick} />
        </form> 

        </div>
    )




}