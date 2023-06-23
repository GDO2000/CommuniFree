import Comment from './Comment'
import './PostPopup.css'


export default function PostPopup({handleDeleteClick,post}) {
    
    return(
        <div className='postPopup'>
            <div className='closeButton'>
                <button className= "closePopUp" onClick={handleDeleteClick}>X</button>
            </div>
            <div className="productSection">
            
            <div className='productImage'>
            <img className="image"src={post.image}/>
            </div>
       
            <div className='productInfo'>
            
            <h1>{post.title}</h1>
            <h3>{post.location}</h3>
            <p>{post.description}</p>
        </div>
        </div>
        <div className='commentSection'>
            <h1>Comments:</h1>
            <input placeholder="What are your thoughts?" type='text'></input>
            <button>Send</button>
            <Comment/>
        </div>
        </div>
    )
}