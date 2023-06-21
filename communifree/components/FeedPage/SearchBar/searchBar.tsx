import Next from 'next';
import React from 'react';
import { useState, useEffect } from 'react';
import "./SearchBar.css";
import Image from 'next/image';
import supabase from '../../../utils/supabaseClient'

type postObject = {
  title: string;
  description: string;
  location: string;
  poster: string;
  [key: string]: any;
};

export default function SearchBar() {
  const [fetchError, setFetchError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      const { data, error } = await supabase
        .from('post_info')
        .select();

      if (error) {
        setFetchError('Could not fetch any posts');
        setPosts(null);
        console.log(error);
      }

      if (data) {
        console.log(data);
        setPosts(data);
        console.log(posts);

        setFetchError(null);
      }
    };

    fetchSearchResults();
  }, []);

  function handleClick() {
    let returnArray: Array<postObject> = [];

    for (let i = 0; i < posts.length; i++) {
      const object = posts[i];

      for (const key in object) {
        const propertyValue = object[key].toString().toLowerCase();
        const searchTerm: string = search.toLowerCase();
        const regexPattern: string = `.*${searchTerm.split('').join('.*')}.*`;
        const regex: RegExp = new RegExp(regexPattern);

        if (regex.test(propertyValue)) {
          returnArray.push(object);
          console.log(returnArray);
        }
      }       
    }
  }

  function handleChange(e: {target: {value:string;}}) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div id="searchfield">
        <input className="search-bar" placeholder='What food are you looking to save?' onChange={handleChange}/>
        <button className="search-button" onClick={handleClick}><Image src="/searchimg.bmp" alt="magnifying glass image" width="50" height="40"/></button>
      </div>
    </>
  );
}