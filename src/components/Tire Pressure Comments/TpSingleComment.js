import '../../styles/comments.css'
import textBubble from '../../assets/textbubble.png'

export default function TpSingleComment ({comment}){
    return(
        <>
        <div className="comment">
            
            <div className="comment-image-container">
                <img src="/icons8-user-48.png" alt='avatar icon for users'/>
            </div>
            <div className="comment-container">
                <img className='comment-img' src={textBubble} alt="text bubble with comment information"/>
            <div className="comment-top-left">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div className="comment-date">{Date(comment.createdAt)}</div>

                </div>
                <div className="comment-text">{comment.body}</div>
                
                    </div>
               
            </div>
       </div>
        </>
    )
}