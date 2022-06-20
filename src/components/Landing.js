import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/repairCard.css";
import Video from "../assets/video2.mp4";



// import { SignUp } from "./Login/Sign Up/SignUp"
// import { Login } from "./Login/Sign Up/Login"

export default function Landing() {
  let navigate = useNavigate();

  return (
    
      <section className="hero">
        <section className="showcase">
          <header>
            <h1 className="rp-logo">Easy Fix</h1>
            <div className="buttons">
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
                Here at Easy Fix, we are here for you. Our mission is to provide valuable knowledge and resources about basic car repair. People should not have to rely solely on auto repair shops that can possibly take advantage of consumers' lack of knowledge on all things car related. We've been there. Lets help each other. To find more information, please sign up and login to obtain a wealth of resources for your DIY car repair needs. Let us help you.
              </p>
            </div>
          </div>
        </section>
        </section>
       
    )}