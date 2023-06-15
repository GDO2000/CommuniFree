import Next from 'next';
import { MouseEventHandler } from 'react';
type postObject = {
    title: string,
    description: string,
    location: string,
    poster: string,
    [key: string]: any;
    }
export default function SearchButton (props:{handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;}) {
    return (
      <></>  
    );
}