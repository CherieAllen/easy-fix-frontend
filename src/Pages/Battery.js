import Comments from "../components/Battery Comments/Comments"
import {Link }from 'react-router-dom'
import "../styles/page.css";



export function Battery(){
    return(
        <>
        <Link to='/repaircard'> &lt; Back </Link>
        <header className="page-header">
            <h1>How to Change a Car battery</h1>
        </header>
        <div className="page-p1-container">
        <div className="page-p1-image">
          <img
            className="image-1"
            src='https://shop.advanceautoparts.com/r/sites/default/files/new-DH-install_800x450.jpg'
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p1-text">
          <ul>
        <p className="tag-line">Installing a car battery may sound intimidating but with the right materials you can do it at home by yourself.</p>
         <p className="section-heading"> Materials</p>
         <div className="materials-section">
         <li>Replacement battery</li>   
         <li>Gloves</li>   
         <li>Wrench or Socket Set</li>   
         </div>
          </ul>
          <ul>
            <p className="section-heading"> Step 1</p>
            <p>Make sure the car is off and located in a safe place. Open up the hood or trunk to located the placement of the battery. Consult your vehicle's owner's manual for further instructions on where the battery would be located if unsure. </p>
            <p className="section-heading"> Step 2</p>
            <p>Find the negative and positive battery terminals. Remember, positive is red, negative is black. Typically, the positive terminal has a small plastic cover with a plus sign that can be easily pried back. The negative terminal may have a negative sign nearby, but not always.</p> 
            <p className="section-heading"> Step 3</p>
            <p>Using a wrench, loosen the nut or bolt that secures the negative terminal and cable to the negative battery post. Wiggle the negative battery terminal off of the battery pos, and move it out of the way where it doesn’t touch anything. Make sure the battery terminal isn’t stretching or binding too much. </p>
            <p className="section-heading"> Step 4</p>
            <p>Repeat the steps for the positive battery terminal and take note of how the terminals are positioned. </p>
            <p className="section-heading"> Step 5</p>
            <p>Remove the clamp or retaining system holding the battery in place and set the parts and fasteners aside to avoid spilling or misplacing them.</p>
            <p className="section-heading"> Step 6</p>
            <p>Carefully lift the battery out without jostling it too much (be prepared, it is slightly heavy). If the posts are located on top of the battery, as opposed to on the side, you can use the battery carrying strap.</p>
          </ul>
          <ul>
            
          </ul>
        </div>
      </div>
      <div className="page-p2-container">
        <div className="page-p2-image">
          <img
            className="image-2"
            src='https://shop.advanceautoparts.com/r/sites/default/files/terminal_protection1_DH_800x450.jpg'
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p2-text">
          <ul>
          <p className="section-heading"> Step 7</p>
          <p>Take your new matching battery and reinstall in the car. Be sure to pay attention to what terminals go where and make sure the battery is securely in position. </p>
          <p className="section-heading"> Step 8</p>
          <p>If so equipped, reinstall the battery’s securing posts. </p>
          <p className="section-heading"> Step 9</p>
          <p>Reconnect and tighten the cable to the positive terminal first, then the negative terminal. The cables should be snug on the terminals, unable to move.</p>
          <p className="section-heading"> Step 10</p>
          <p>Once it’s buttoned up, make sure everything is working by starting the vehicle. If all’s good, it should fire right up.</p>
          <p className="section-heading"> Step 11</p>
          <p>Make sure all of your tools are accounted for and once done you can take you old battery to an auto parts store to be recycled.</p>
          </ul>
        </div>
      </div>
        <section className="comments-section-container">
        <Comments/>

        </section>
       


        

        
        </>
    )
}