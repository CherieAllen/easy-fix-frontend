import Comments from "../components/Battery Comments/Comments"
import {Link }from 'react-router-dom'



export function Battery(){
    return(
        <>
        <Link to='/'> &lt; Back to Home</Link>
        <Comments/>
        </>
    )
}