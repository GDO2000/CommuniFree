import './Comment.css'


export default function Comment({comments}){
    let i = comments.length;
    return(
    <div className='comment'>
       <h3 className='commentHeading' >George</h3> 
       <p className='commentBody'>{comments[i-1].comment}</p>
    </div>
    );
}