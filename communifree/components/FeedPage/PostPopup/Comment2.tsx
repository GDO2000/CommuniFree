import './Comment.css'


export default function Comment2({comments}){
    let i = comments.length;
    return(
    <div className='comment'>
       <h3 className='commentHeading' >Chaya</h3> 
       <p className='commentBody'>{comments[i-2].comment}</p>
    </div>
    );
}