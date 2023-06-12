import Next from 'next';
import React from 'react';
import {useState} from 'react';
import TextInput from './TextInput/TextInput';
import SearchButton from './SearchButton/SearchButton';

export default function SearchBar () {
    const [search, setSearch] = useState<string>("");
    return(
        <>
        <TextInput/>
        <SearchButton/>
        </>
    );
}