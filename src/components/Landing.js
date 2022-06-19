import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/repairCard.css";
import Video from "../assets/video1.mp4";



// import { SignUp } from "./Login/Sign Up/SignUp"
// import { Login } from "./Login/Sign Up/Login"

export default function Landing() {
  let navigate = useNavigate();

  return (
    
      <section className="hero">
        <section className="showcase">
          <header>
            <h1 className="rp-logo">Easy Fix</h1>
            <div className="toggle">
             </div>
          </header>

          <video
            className="hero-video"
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
          />
          <div className="overlay">
            <div className="text">
              <h2>The Help You Need</h2>
              <h3>Is just a simple click away</h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                quasi ea velit ipsum nemo voluptatibus dignissimos accusantium,
                beatae, non doloribus doloremque dolore odio unde. Eligendi
                beatae maiores a obcaecati ratione. Error reiciendis, voluptates
                quisquam aperiam, incidunt, repudiandae quam porro distinctio
                corrupti saepe eaque blanditiis doloribus rerum officiis maiores
                aliquam exercitationem. Iusto vero alias provident fuga? Nostrum
                beatae laboriosam eos quos.
              </p>
              <button
                  className="Login-button"
                  onClick={() => {
                    navigate("/login");
                  }}> Login </button>
                  <button
                  className="Sign-up-button"
                  onClick={() => {
                    navigate("/signup");
                  }}> Sign Up</button>
                  <button
                  onClick={() => {
                    navigate("/repaircard");
                  }}> Click Here</button>
            </div>
          </div>
        </section>
        </section>
       
    )}