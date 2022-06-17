// import Comments from "../components/Comments";
import { Link } from "react-router-dom";
import TpComments from "../components/Tire Pressure Comments/TpComments";
import "../styles/page.css";
import tirePressureImage from "../assets/pexels-erik-mclean-5120127.jpg";
import tireRidgesImage from "../assets/tireridges.jpg";

export function TirePressure() {
  return (
    <>
      <Link to="/"> &lt; Back to Home</Link>
      <header className="page-header">
        <h1>How to Change a Check Tire Pressure</h1>
      </header>
      <div className="page-p1-container">
        <div className="page-p1-image">
          <img
            className="image-1"
            src={tirePressureImage}
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p1-text">
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
        </div>
      </div>
      <div className="page-p2-container">
        <div className="page-p2-image">
          <img
            className="image-2"
            src={tireRidgesImage}
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p2-text">
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
          <ul>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eum
            numquam provident facilis perspiciatis porro ab pariatur error
            eligendi aspernatur dolore, repudiandae fugiat ratione accusamus
            dolor quam deserunt tenetur totam.
          </ul>
        </div>
      </div>
      <div className="comments-section-container">
        <TpComments />
      </div>
    </>
  );
}
