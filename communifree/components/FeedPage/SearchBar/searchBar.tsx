import Next from 'next';
import React from 'react';
import {useState} from 'react';
import TextInput from './TextInput/TextInput';
import SearchButton from './SearchButton/SearchButton';
import "./SearchBar.css"
import Image from 'next/image';

type postObject = {
    title: string,
    description: string,
    location: string,
    poster: string,
    [key: string]: any;
    }

export default function SearchBar  () {
    //stores string of text input in search bar
    const [search, setSearch] = useState<string>("");
    //dummy data
    let exampleArray : Array<postObject> = [{title: "Carrots", 
        description: "good ol carrots", 
        location: "London", 
        poster: "Joe Bloggs"
        },
        
        {
        title: "Apples",
        description: "Crisp and juicy apples",
        location: "London",
        poster: "Jane Smith"
        },
        
        {
        title: "Bananas",
        description: "Yellow and potassium-rich bananas",
        location: "London",
        poster: "John Doe"
        },
        
        {
        title: "Oranges potatoes",
        description: "Citrusy oranges and potatoes",
        location: "London",
        poster: "Emily Johnson"
        },
        
        {
        title: "Strawberries",
        description: "Sweet and succulent strawberries",
        location: "London",
        poster: "David Brown"
        },
        
        {
        title: "Grapes",
        description: "Juicy grapes in a variety of colors",
        location: "Langley Mill",
        poster: "Sarah Wilson"
        },
        
        {
        title: "Tomatoes",
        description: "Vibrant and flavorful tomatoes",
        location: "Nottingham",
        poster: "Michael Davis"
        },
        
        {
        title: "Lettuce",
        description: "Crisp and refreshing lettuce",
        location: "London",
        poster: "Emma Wilson"
        },
        
        {
        title: "Potatoes",
        description: "Versatile and hearty potatoes",
        location: "Paris",
        poster: "Daniel Thompson"
        },
        
        {
        title: "Cucumbers",
        description: "Cool and hydrating cucumbers",
        location: "London",
        poster: "Sophia Anderson"
        }];


        function handleClick() {
            let returnArray: Array<postObject> = [];
            // Declare an empty array `returnArray` to store the matching objects.
          
            for (let i = 0; i < exampleArray.length; i++) {
              // Loop through each element in `exampleArray`.
              const object = exampleArray[i];
              // Get the current object from `exampleArray`.
          
              for (const key in object) {
                // Loop through each property of the current object.
                const propertyValue = object[key].toString().toLowerCase();
                // Get the string value of the current property and convert it to lowercase.
                const searchTerm: string = search.toLowerCase();
                // Get the lowercase value of the `search` variable.
                const regexPattern: string = `.*${searchTerm.split('').join('.*')}.*`;
                // Create a regex pattern to match any characters between the characters of `searchTerm`.
                const regex: RegExp = new RegExp(regexPattern);
                // Create a regular expression object using the regex pattern.
          
                if (regex.test(propertyValue)) {
                  // Check if the property value matches the regex pattern.
                  returnArray.push(object);
                  // If there is a match, add the current object to the `returnArray`.
                  console.log(returnArray);
                  // Log the `returnArray` to the console.
                }

                
            }       
        }
    }

    function handleChange(e: {target: {value:string;}}) {
        setSearch(e.target.value);
    }
    // Update the `search` state variable with the value of the input field.

    return(
        <>
        <div id="searchfield">
        <input className="search-bar" placeholder='What food are you looking to save?' onChange={handleChange}/>
          {/* Render an input field with the `nav-search` class and bind the `handleChange` function to the `onChange` event. */}
        <button className="search-button" onClick={handleClick}><Image src="/searchimg.bmp" alt="magnifying glass image" width="50" height="40"/></button>
          {/* Render a button with the `nav-search` class and bind the `handleClick` function to the `onClick` event. */}
        </div>
        
        </>
    );

}

