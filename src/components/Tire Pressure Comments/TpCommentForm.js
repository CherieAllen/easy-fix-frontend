import { useState } from "react";
import '../../styles/batteryComments.css'


export default function CommentForm() {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");

  const review = {
    username,
    body,
  }

  const submitDisabled = body.length === 0 || username.length === 0;


  const handleOnClick = (e) => {
    e.preventDefault();
    fetch("http://localhost:5050/tpcomments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then(() => {
        fetch("http://localhost:5050/tpcomments")
        .then((response) => {
          response.json();
          window.location.reload();
        });
      })
      .catch((err) => alert(err));
  };

  return (
    <form>
    <div className="comment-form-title">Username</div>
    <textarea
          
        className="comment-form-username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
       
       <br></br> 
       <div className="comment-form-title">Leave a comment</div>
      <textarea
        className="comment-form-comment"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    
      
        <br></br>
      <button className="form-button" onClick={handleOnClick} disabled={submitDisabled}>Submit</button>
    </form>
  );
}