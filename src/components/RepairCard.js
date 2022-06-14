import{ useNavigate } from "react-router-dom"
import React from 'react'
import "../styles/repairCard.css"




export default function RepairCard(){

    let navigate=useNavigate()

    return(
        <section>
        <div className='row'>
        <div className='column'>  
        <div className='wrapper'>
        <div className='card'>
            <div className='card_body'>
                <h2 className='card_type'>How to Change car oil</h2>
                <p className='card_description'>Quick and easy guide to changing car oil</p>
                <img src="https://news.goauto.ca/wp-content/uploads/2018/01/oil-change.jpg" alt="typical car problem" className='card_image'/>
            </div>
            <button 
            className='card_button'
            onClick={()=>{
                
                navigate("/repairs/oil")
            }}
            
            >Click Here</button>

            
        </div>
        </div>
        </div>  
        </div>

        <div className='row'>
        <div className='column'>  
        <div className='wrapper'>
        <div className='card'>
            <div className='card_body'>
                <h2 className='card_type'>How to change a car battery</h2>
                <p className='card_description'>Learn how to change a car battery in a few simple steps</p>
                <img src="https://shop.advanceautoparts.com/r/sites/default/files/DH-install-LK1_800x450.jpg" alt="typical car problem" className='card_image'/>
            </div>
            <button 
            className='card_button'
            onClick={()=>{
                
                navigate("/repairs/battery")
            }}
            
            >Click Here</button>

            
        </div>
        </div>
        </div>  
        </div>

        <div className='row'>
        <div className='column'>  
        <div className='wrapper'>
        <div className='card'>
            <div className='card_body'>
                <h2 className='card_type'>How to check tire pressure</h2>
                <p className='card_description'>Learn how to check your tire pressure </p>
                <img src="https://www.goodyear.com/content/dam/gy-com/images/learn/tireCare/checking-tire-air-pressure-with-tire-pressure-gauge.jpg" alt="typical car problem" className='card_image'/>
            </div>
            <button 
            className='card_button'
            onClick={()=>{
                
                navigate("/repairs/tirepressure")
            }}
            
            >Click Here</button>

            
        </div>
        </div>
        </div>  
        </div>

        </section>

    )
    
}