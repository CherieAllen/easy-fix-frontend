import { useState } from "react";
import "../../styles/comments.css";

export default function OilCommentForm() {
  const [body, setBody] = useState("");
  const [username, setUsername] = useState("");

  const review = {
    username,
    body,
  };

  const submitDisabled = body.length === 0 || username.length === 0;

  const handleOnClick = (e) => {
    e.preventDefault();
    fetch("https://easy-fix-app-ca.web.app/oilcomments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then(() => {
        fetch("https://easy-fix-app-ca.web.app/oilcomments").then(
          (response) => {
            response.json();
            window.location.reload();
          }
        );
      })
      .catch((err) => alert(err));
  };

  return (
    <form className="form-container">
      <div className="comment-form-title">Name</div>
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
      <button
        className="form-button"
        onClick={handleOnClick}
        disabled={submitDisabled}
      >
        Submit
      </button>
    </form>
  );
}
