import Next from 'next';
type postObject = {
    title: string,
    description: string,
    location: string,
    poster: string,
    [key: string]: any;
    }
export default function SearchButton (props:{onClick:(array: Array<postObject>)=>void}) {
    return (
        <button >🔍</button>
    );
}