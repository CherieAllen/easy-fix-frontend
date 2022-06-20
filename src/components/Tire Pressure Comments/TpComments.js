import { useEffect, useState } from "react";
import TpSingleComment from "./TpSingleComment";
import TpCommentForm from "./TpCommentForm";

export default function TpComments() {
  const [backendComments, setBackendComments] = useState([]);
  

    useEffect(() => {
    fetch("https://easy-fix-app-ca.web.app/tpcomments")
      .then((response) => response.json())
      .then((data) => setBackendComments(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="comments">
        <h2 className="comments-title"> Comment Section</h2>
        <TpCommentForm />
        <div className="comments-container">
          {backendComments.map(backendComment => (
            <TpSingleComment comment={backendComment} key={backendComment.id}   />
       
          ))}
        </div>
      </div>
    </>
  );
}
