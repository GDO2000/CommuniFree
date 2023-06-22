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

interface Post {
  [key: string]: string | number; // Adjust the types based on your actual data structure
}

export default function SearchBar({setSearch, handleClick,setPosts}) {
  const [fetchError, setFetchError] = useState<string | null>("");

  

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data, error } = await supabase
          .from("post_info")
          .select();

        if (error) {
          throw new Error("Could not fetch any posts");
        }

        setPosts(data || []);
        setFetchError(null);
      } catch (error) {
        console.log(error);
        setFetchError("Could not fetch any posts");
      }
    };

    fetchPosts();
  }, []);

  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <>
      <div id="searchfield">
        <input
          className="search-bar"
          placeholder="What food are you looking to save?"
          onChange={handleChange}
        />
        <button className="search-button" onClick={handleClick}>
          <img
            src="/searchimg.bmp"
            alt="magnifying glass image"
            width="50"
            height="40"
          />
        </button>
      </div>
    </>
  );
}