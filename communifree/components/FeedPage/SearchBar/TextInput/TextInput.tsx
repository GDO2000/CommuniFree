import Next from 'next';
import React from 'react';

export default function TextInput (props:{handleChange:(e: {target: {value:string;}})=>void}) {
    return (
        <input onChange={props.handleChange}/>
    );
}