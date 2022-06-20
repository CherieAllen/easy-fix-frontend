import { useEffect, useState } from "react";
import TpSingleComment from "./TpSingleComment";
import TpCommentForm from "./TpCommentForm";
import '../../styles/comments.css'

export default function TpComments() {
  const [backendComments, setBackendComments] = useState([]);
  

    useEffect(() => {
    fetch("http://localhost:5050/tpcomments")
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
            <TpSingleComment comment={backendComment} key={backendComment.id}   />
       
          ))}
        </div>

        <TpCommentForm />
        
      </div>
    </>
  );
}
