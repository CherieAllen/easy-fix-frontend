import '../../styles/batteryComments.css'

export default function TpSingleComment ({comment}){
    return(
        <>
        <div className="comment">
            <div className="comment-image-container">
                <img src="/icons8-user-48.png" alt='avatar icon for users'/>
            </div>
            <div className="comment-right-part">
                <div className="comment-content">
                    <div className="comment-author">{comment.username}</div>
                    <div className="comment-date">{Date(comment.createdAt)}</div>

                </div>
                <div className="comment-text">{comment.body}</div>
                
                    </div>
               
            </div>
       
        </>
    )
}