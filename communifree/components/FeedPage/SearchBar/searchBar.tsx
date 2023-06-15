import Next from 'next';
import React from 'react';
import {useState} from 'react';
import TextInput from './TextInput/TextInput';
import SearchButton from './SearchButton/SearchButton';
import "./SearchBar.css"

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
        
        for (let i = 0; i < exampleArray.length; i++) {
            const object = exampleArray[i];
            for (const key in object) {
                const propertyValue = object[key].toString().toLowerCase();
                const searchTerm: string = search.toLowerCase();
                const regexPattern: string = `.*${searchTerm.split('').join('.*')}.*`;
                const regex: RegExp = new RegExp(regexPattern);
                if (regex.test(propertyValue)) {
                    returnArray.push(object);
                    console.log(returnArray)
                }
                
            }       
        }
    }

    function handleChange(e: {target: {value:string;}}) {
        setSearch(e.target.value);
    }

    return(
        <>
        <input className="nav-search" onChange={handleChange}/>
        <button className="nav-search" onClick={handleClick} >🔍</button>
        </>
    );

}