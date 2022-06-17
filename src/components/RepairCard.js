import { useNavigate } from "react-router-dom";
import React from "react";
import "../styles/repairCard.css";
import Video from "../assets/video1.mp4";
import hamburgerMenu from "../assets/whiteham.svg";
import canvaImage from "../assets/canva2.png"

// import { SignUp } from "./Login/Sign Up/SignUp"
// import { Login } from "./Login/Sign Up/Login"

export default function RepairCard() {
  let navigate = useNavigate();

  return (
    <>
      <section className="hero">
        <section className="showcase">
          <header>
            <h1 className="rp-logo">Easy Fix</h1>
            <div className="toggle">
              <img className="hamburger-menu"
            src={hamburgerMenu}
            alt="icon for a hamburger menu"
              />
              {/* <MenuToggle /> */}
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
            </div>
          </div>
        </section>

        {/* <div className="menu">
        <ul>
            <li>Home</li>
            <li>Login/Sign Up</li>
            <li>Pages</li>
        </ul>
    </div> */}
      </section>
      <section />
      <section className="card-container">
        <div className="row">
          <div className="column">
            <div className="wrapper">
              <div className="card">
                <div className="card_body">
                  <h2 className="card_type">How to Change car oil</h2>
                  <p className="card_description">
                    Quick and easy guide to changing car oil
                  </p>
                  <img
                    src="https://news.goauto.ca/wp-content/uploads/2018/01/oil-change.jpg"
                    alt="typical car problem"
                    className="card_image"
                  />
                </div>
                <button
                  className="card_button"
                  onClick={() => {
                    navigate("/repairs/oil");
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="wrapper">
              <div className="card">
                <div className="card_body">
                  <h2 className="card_type">How to change a car battery</h2>
                  <p className="card_description">
                    Learn how to change a car battery in a few simple steps
                  </p>
                  <img
                    src="https://shop.advanceautoparts.com/r/sites/default/files/DH-install-LK1_800x450.jpg"
                    alt="typical car problem"
                    className="card_image"
                  />
                </div>
                <button
                  className="card_button"
                  onClick={() => {
                    navigate("/repairs/battery");
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="column">
            <div className="wrapper">
              <div className="card">
                <div className="card_body">
                  <h2 className="card_type">How to check tire pressure</h2>
                  <p className="card_description">
                    Learn how to check your tire pressure{" "}
                  </p>
                  <img
                    src="https://www.goodyear.com/content/dam/gy-com/images/learn/tireCare/checking-tire-air-pressure-with-tire-pressure-gauge.jpg"
                    alt="typical car problem"
                    className="card_image"
                  />
                </div>
                <button
                  className="card_button"
                  onClick={() => {
                    navigate("/repairs/tirepressure");
                  }}
                >
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
