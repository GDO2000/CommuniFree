import './Post.css'

export default function Post () {
    return (
        <div className="post">
        <img className='postImage' src='/carrots.png' alt='carrots'/>
        <h1 className='postTitle'>Many Carrots</h1>
        <h2 className='postLocation'>London</h2>
        <p className='postDescription'>A lovely box of carrots I’ve just bought too many</p>
        </div>
    )
};