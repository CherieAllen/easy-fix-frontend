import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

export default function Comments() {
  const [backendComments, setBackendComments] = useState([]);
  console.log("backendComments", backendComments);
  const rootComments = backendComments.filter(
    (backendComment) => backendComment.parentId === null
  );

//  const getReplies = commentId => {
//      return backendComments.filter(backendComment => backendComment.parentId === commentId
//  } 


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
          {rootComments.map((rootComment) => (
            <SingleComment key={rootComment.id} comment={rootComment} />
          ))}
        </div>
      </div>
    </>
  );
}
