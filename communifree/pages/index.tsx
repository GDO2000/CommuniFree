import Next from 'next';
import React from 'react';
import {useState} from 'react';
import TextInput from '../src/app/FeedPage/SearchBar/TextInput/TextInput';
import SearchButton from '../src/app/FeedPage/SearchBar/SearchButton/SearchButton';

export default function SearchBar () {
    const [search, setSearch] = useState<string>("");
    return(
        <>
        <TextInput/>
        <SearchButton/>
        </>
    );
}