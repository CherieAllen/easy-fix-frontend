import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";
import CommentForm from "./CommentForm";
import '../../styles/comments.css'

export default function Comments() {
  const [backendComments, setBackendComments] = useState([]);
  

    useEffect(() => {
    fetch("https://easy-fix-app-ca.web.app/comments")
      .then((response) => response.json())
      .then((data) => setBackendComments(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="comments">
        <h2 className="comments-title"> Comment Section</h2>
        <div className="comments-container">
          {backendComments.map(backendComment => (
            <SingleComment comment={backendComment} key={backendComment.id}   />
       
          ))}
        </div>
        <CommentForm />
        
      </div>
    </>
  );
}
