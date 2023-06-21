import './Post.css'

export default function Post ({post}) {
    return (
        <div className="post">
        <img className='postImage' src={post.image} alt='Picture of Item'/>
        <h1 className='postTitle'>{post.title}</h1>
        <h2 className='postLocation'>{post.location}</h2>
        <p className='postDescription'>{post.description}</p>
        </div>
    )
};