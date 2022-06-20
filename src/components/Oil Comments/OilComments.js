import { useEffect, useState } from "react";
import OilSingleComment from "./OilSingleComment";
import OilCommentForm from "./OilCommentForm";

export default function OilComments() {
  const [backendComments, setBackendComments] = useState([]);
  

    useEffect(() => {
    fetch("https://easy-fix-app-ca.web.app/oilcomments")
      .then((response) => response.json())
      .then((data) => setBackendComments(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="comments">
        <h2 className="comments-title"> Comment Section</h2>
        <OilCommentForm />
        <div className="comments-container">
          {backendComments.map(backendComment => (
            <OilSingleComment comment={backendComment} key={backendComment.id}   />
       
          ))}
        </div>
      </div>
    </>
  );
}
