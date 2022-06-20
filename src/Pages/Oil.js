import OilComments from '../components/Oil Comments/OilComments';
import {Link} from 'react-router-dom';
import "../styles/page.css";




export function Oil(){
  
    return (
        <>
         <Link to='/repaircard'> &lt; Back</Link>
         <header className='page-header'>
         <h1>How to Change Car Oil</h1>
      </header>
      <div className="page-p1-container">
        <div className="page-p1-image">
          <img
            className="image-1"
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPEgUGIRO5X5zExd2A0tAclSkQY8koUSVohw&usqp=CAU'
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p1-text">
          <ul>
          <p className="tag-line">Changing you car oil is one of the easiest maintenance duties you can do for your car. It can safe you so much money if you learn how to do this task on your own.</p>
          <p className="section-heading"> Materials</p>
          <div className='materials-section'>
         <li>Motor Oil</li>   
         <li>Oil filter</li>  
         <li>Oil pan</li>  
         <li>Wrench</li>  
         <li>Floor Jack or lift</li>  
         <li>Gloves</li>  
         </div>
          </ul>
          <ul>
          <p className="section-heading"> Step 1</p>
          <p>Look under your car to find the drain plug.
          The drain plug is a large nut or plug located under the oil pan at the bottom of the engine. If you can’t reach your oil drain plug easily, you’ll have to either crawl under your car to reach it or jack up the car.</p>
          <p className="section-heading"> Step 2</p>
          <p>Place oil pan under the oil drain plug.You want this oil pan to catch the oil, so make sure it’s big enough.</p>
          <p className="section-heading"> Step 3</p>
          <p>Unscrew the oil drain plug.Protect your hand with a rag or some paper towels, and be ready to move your hand out of the way. The oil now drains out of your engine into the container.</p>
          <p className="section-heading"> Step 4</p>
          <p>Remove the cap from the oil filler hole at the top of your engine and unscrew the oil filter, using a wrench if you can’t do it by hand. To unscrew the filter, twist it counterclockwise. The filter will have oil in it, so be careful not to spill it when you remove it. If any remnants of the filter’s rubber seal remain on your engine, remove them.</p>
          <p className="section-heading"> Step 5</p>
          <p>Empty the oil from the filter into a drain pan. After the filter is empty, wrap it in newspaper and set it aside to take to a recycling center with your old oil.</p>
          </ul>
          
          <ul>
          <p className="section-heading"> Step 6</p>
          <p>Open a new bottle of oil and dip a finger into it. Use the oil to moisten the gasket on the top of the new oil filter.</p>
          </ul>
        </div>
      </div>
      <div className="page-p2-container">
        <div className="page-p2-image">
          <img
            className="image-2"
            src='https://www.familyhandyman.com/wp-content/uploads/2019/08/FH09SEP_501_13_213-1024x1024.jpg'
            alt="a tire that is appropriately filled with air"
          />
        </div>
        <div className="page-p2-text">
          <ul>
          <p className="section-heading"> Step 7</p>
          <p>Screw the new filter into the engine where the old one was. Follow directions on the filter, or turn it gently by hand until it “seats” and then give it another three-quarter turn.</p>
          <p className="section-heading"> Step 8</p>
          <p>Wipe around the place where the oil drain plug goes. Do this step only after all the oil has drained out.</p>
          <p className="section-heading"> Step 9</p>
          <p>Replace the oil drain plug and use an adjustable wrench to tighten it. If your vehicle uses an oil drain plug gasket, make sure the old one has been removed and lay a new gasket on the pan before you replace the plug.</p>
          <p className="section-heading"> Step 10</p>
          <p>Use a funnel to pour all but 1 quart of the fresh oil into the oil filler hole. Pour slowly to allow the oil time to run down.</p>
          <p className="section-heading"> Step 11</p>
          <p>Replace the oil filler cap and run the engine for 30 to 60 seconds. Check for leaks from the oil drain plug and around the filter.</p>
          <p className="section-heading"> Step 12</p>
          <p>Shut off the engine and wait 5 to 10 minutes for the oil to settle into the oil pan, and then check the oil level again. Remove the oil dipstick, wipe it with a clean, lint-free rag, and shove it back in. Pull it out again and check it.</p>
          <p className="section-heading"> Step 13</p>
          <p>Keep adding oil a little at a time. Check the stick after each addition until you reach the “Full” line on the dipstick.</p>
          <p className="section-heading"> Step 14</p>
          <p>Remove the drain pan from under the vehicle and give the car a test drive. Go around the block a couple of times.</p>
          <p className="section-heading"> Step 15</p>
          <p>Let the oil settle down again for 5 to 10 minutes, then recheck the dipstick. You can take the old oil collected in the oil pan to an autopart store to have dumped.</p>
          </ul>        
        </div>
      </div>
      <div className="comments-section-container">
      <OilComments/>
      </div>
        
        </>
    )
}