import '../styles/Comments.css'

export default function SingleComment ({comment}){
    return(
        <>
        <div className="comment">
            <div className="comment-image-container">
                <img src="/icons8-user-48.png"/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div className="comment-date">{new Date(comment.createdAt._seconds * 1000.).toLocaleDateString("en-US")}</div>

                </div>
                <div className="comment-text">{comment.body}</div>
            </div>
        </div>
        </>
    )
}