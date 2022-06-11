import React, { useEffect, useState } from "react";
import RepairCard from "./RepairCard";


export default function RepairList() {
  const [repairs, setRepairs] = useState();
  useEffect(() => {
    fetch("https://easy-fix-app-ca.web.app/repairs")
      .then((response) => response.json())
      .then((data) => setRepairs(data))
      .catch(console.error);
  }, []);

  return (
    <section>
     
        {!repairs ? (
          <h2>Loading...</h2>
        ) : (
          repairs.map(repair => (<RepairCard repair= {repair} key={repair.id}/>
              
          ))
        )}
     
    </section>
  );
}
