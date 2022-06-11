<div className='row'>
        <div className='column'>  
        <div className='wrapper'>
        <div className='card'>
            <div className='card_body'>
                <h2 className='card_type'>{repair.type}</h2>
                <p className='card_description'>{repair.description}</p>
                <img src={repair.image} alt="typical car problem" className='card_image'/>
            </div>
            <button 
            className='card_button'
            onClick={()=>navigate(`/repairs/${repair?.id}`)}
            
            >Click Here</button>

            
        </div>
        </div>
        </div>  
        </div>