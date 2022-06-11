
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";




export function RepairPage(){
    let{repairID}=useParams();
    const[repair,setRepair]=useState(null);
    useEffect(()=>{
        console.log('Fetxhing data for ', repairID)
        fetch(`https://easy-fix-app-ca.web.app/repairs/${repairID}`)
        .then(response => response.json())
        .then(data=> setRepair(data))
        .catch(console.error)
    },[repairID])
    return (
        <>
        
            <h2>Repair Page</h2>
          
            
        </>
    )
}