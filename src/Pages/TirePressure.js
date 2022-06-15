// import Comments from "../components/Comments";
import {Link} from "react-router-dom"
import TpComments from "../components/Tire Pressure Comments/TpComments"

export function TirePressure (){
    return(
        <>
         <Link to='/'> &lt; Back to Home</Link>
        <TpComments/>
        </>
    )
}