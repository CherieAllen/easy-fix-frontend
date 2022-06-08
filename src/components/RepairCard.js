import React from 'react'
import "../styles/RepairCard.css"






export default function RepairCard({repair}){
    return(
        <div className='row'>
        <div className='column'>  
        <div className='wrapper'>
        <div className='card'>
            <div className='card_body'>
                <h2 className='card_type'>{repair.type}</h2>
                <p className='card_description'>{repair.description}</p>
                <img src={repair.image} class='card_image'/>
            </div>
            <button className='card_button'>Click Here</button>

            
        </div>
        </div>
        </div>  
        </div>
    )
}