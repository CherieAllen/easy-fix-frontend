import Comments from "../components/Battery Comments/Comments"
import {Link }from 'react-router-dom'



export function Battery(){
    return(
        <>
        <Link to='/'> &lt; Back to Home</Link>
        <header className="battery-header">
            <h1> How to Change a Car Battery</h1>
        </header>
        

        <Comments/>
        </>
    )
}