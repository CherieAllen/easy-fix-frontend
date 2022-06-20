// import Comments from "../components/Comments";
import { Link } from "react-router-dom";
import TpComments from "../components/Tire Pressure Comments/TpComments";
import "../styles/page.css";


export function TirePressure() {
  return (
    <>
      <Link to="/repaircard"> &lt; Back</Link>
      <header className="page-header">
        <h1>How to Change a Check Tire Pressure</h1>
      </header>
      <div className="page-p1-container">
        <div className="page-p1-image">
          <img
            className="image-1"
            src="https://www.familyhandyman.com/wp-content/uploads/2020/04/Step-Three-A-7by5.jpg?w=1200"
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p1-text">
          <ul>
          <p className="tag-line"> It is essential to know how to check you tire pressure in order to not get a surprise flat. We also included steps to how to fill your tire with --just in case. </p>
         <p className="section-heading"> Materials</p>
         <div className="materials-section">
         <li>Tire pressure gauge</li>    
         <li>Air Compressor</li>
         </div>    
          </ul>
          <ul>
          <p className="section-heading"> Step 1</p>
          <p> Determine the approriate PSI level for you tires. Usually the average psi is between 32-35 for tires but you can find you reccomended value on the door jam of you vehicle.</p>
          <p className="section-heading"> Step 2</p>
          <p>Remove the valve cap off of the tire air valve.</p>
          <p className="section-heading"> Step 3</p>
          <p>Use tire pressure gauge and press onto the tire air valve. Press it hard. This creates a tight seal around the tire air valve so you don’t accidentally release air from the tire. You’ll hear a hissing sound if air is coming out. A small bar with numbered notches will pop out of the pencil gauge with the tire pressure reading.</p>

          </ul>
        </div>
      </div>
      <div className="page-p2-container">
        <div className="page-p2-image">
          <img
            className="image-2"
            src="https://www.familyhandyman.com/wp-content/uploads/2020/04/Step-Four-7by5.jpg?w=1200"
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p2-text">
        <ul>
          <p className="section-heading"> How to put air in the tire.</p>
         <p className="section-heading"> Step 1</p>
          <p>Use an Air Compressor, usually founded at a local gas station. Fill up the tire by pressing the air compressor nozzle onto the tire air valve in the same manner as the gauge — hard and straight-on to create a tight seal. Hold the nozzle onto the tire air valve for about 30 seconds to one minute, depending on how low the initial reading is. Repeat Step Three to get the new reading. Add or release air as needed to reach the recommended PSI.</p>
            
          </ul>
          <ul>
          <p className="section-heading"> Step 2</p>
          <p>Repeat Steps Three and Four on the three remaining tires.</p>
          </ul>
          
        </div>
      </div>
      <div className="comments-section-container">
        <TpComments />
      </div>
    </>
  );
}
