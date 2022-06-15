import OilComments from '../components/Oil Comments/OilComments';
import {Link} from 'react-router-dom';




export function Oil(){
  
    return (
        <>
         <Link to='/'> &lt; Back to Home</Link>
        <OilComments/>
        </>
    )
}