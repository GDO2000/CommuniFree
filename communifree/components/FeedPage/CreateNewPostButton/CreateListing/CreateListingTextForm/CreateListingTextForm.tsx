import { useState } from "react";
import "./CreateListingTextForm.css";
import Head from "next/head";
import supabase from "../../../../../utils/supabaseClient";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";

interface ModalProps {
  setOpenModal: (open: boolean) => void;
  handleDeleteClick: () => void;
}

type postObject = {
  title: string;
  description: string;
  condition: string;
  contact: string;
  [key: string]: any;
};

export default function Modal({ setOpenModal, handleDeleteClick }: ModalProps) {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [condition, setCondition] = useState("");
  const [contact, setContact] = useState("");
  const [formError, setFormError] = useState<string | null>(null);
  const router = useRouter();

  function handleTitleChange(e: { target: { value: string } }) {
    setTitle(e.target.value);
    console.log(`The title is ${title}`);
  }
  function handleLocationChange(e: { target: { value: string } }) {
    setLocation(e.target.value);
    console.log(`The location is ${location}`);
  }
  function handleDescriptionChange(e: { target: { value: string } }) {
    setDescription(e.target.value);
    console.log(`The description is ${description}`);
  }

  function handleImageChange(e: { target: { value: string } }) {
    setImage(e.target.value);
    console.log(`The image url is ${image}`);
  }
  function handleConditionChange(e: { target: { value: string } }) {
    setCondition(e.target.value);
    console.log(`The condition is ${condition}`);
  }
  function handleContactChange(e: { target: { value: string } }) {
    setContact(e.target.value);
    console.log(`The contact details are ${contact}`);
  }

  const handlePostClick = async () => {
    let post_id = uuidv4();
    //e.preventDefault()
    if (
      !title.trim() ||
      !location.trim() ||
      !description.trim() ||
      !image.trim() ||
      !condition.trim() ||
      !contact.trim()
    ) {
      setFormError("Please fill in all the fields");
      console.log(formError);
      return;
    }

    const { data, error } = await supabase
      .from("post_info")
      .insert([
        { post_id, title, location, description, image, condition, contact },
      ]);

    if (error) {
      console.log(error);
      // Handle the error, e.g., show an error message
      setFormError("Please fill in all the fields");
    }
    if (data) {
      console.log("Data inserted successfully:", data);
      setFormError(null);
      // Handle the successful insertion, e.g., show a success message
      console.log("hello");
    }

    router.reload();
  };

  return (
    <div id="popup">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Darumadrop+One&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <div id="modalBackground">
        <h1 id="createListingH1">Create a listing:</h1>
        <br></br>
        <div>
          <label>Give your listing a title :</label>
          <input
            className="createpostinput"
            placeholder="e.g. 10 Carrots"
            type="text"
            onChange={handleTitleChange}
          />
          <br></br>
          <label>What is your post code?</label>
          <input
            className="createpostinput"
            placeholder="NR17 2EX"
            type="text"
            onChange={handleLocationChange}
          />
          <br></br>
          <label>Describe your product:</label>
          <textarea
            placeholder="e.g. Ready for collection"
            rows={5}
            cols={104}
            onChange={handleDescriptionChange}
          />
          <br></br>
          <label>Please provide an image url for your product:</label>
          <input
            className="createpostinput"
            placeholder="http://your_url_here"
            onChange={handleImageChange}
          />
          <br></br>
          <label htmlFor="condition">
            What is the condition of your product:
          </label>{" "}
          <br></br>
          <select
            onChange={handleConditionChange}
            name="condition"
            id="condition"
          >
            <option id="condition" value="Fresh / long shelf life">
              Fresh / long shelf life
            </option>
            <option id="condition" value="Needs to be eaten within a week">
              Needs to be eaten within a week
            </option>
            <option
              id="condition"
              value="Needs to be eaten in the next few days"
            >
              Needs to be eaten in the next few days
            </option>
            <option id="condition" value="Needs to be eaten today!">
              Needs to be eaten today!
            </option>
          </select>
          <br></br>
          <label>Please enter a contact number or email address:</label>
          <input
            className="createpostinput"
            placeholder="Examplemail@example.co.uk"
            type="text"
            onChange={handleContactChange}
          />
          <br></br>
          <button
            id="cancelbutton"
            onClick={handleDeleteClick} /*setOpenModal={setOpenModal}*/
          >
            Cancel
          </button>
          <button
            id="postbutton"
            /*setOpenModal={setOpenModal}*/ onClick={handlePostClick}
          >
            Post!
          </button>
        </div>
      </div>
    </div>
  );
}
