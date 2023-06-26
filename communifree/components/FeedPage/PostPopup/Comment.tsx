import './Comment.css'


export default function Comment({comments}){
    return(
    <div className='comment'>
       <h3 className='commentHeading' >Name of commenter</h3> 
       <p className='commentBody'>{comments[0].comment}</p>
    </div>
    );
}