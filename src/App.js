import {useState, createContext} from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import RepairCard from './components/RepairCard';
import {Oil} from './Pages/Oil';
import {Battery}  from './Pages/Battery';
import {TirePressure }from './Pages/TirePressure'
import Landing from './components/Landing'



export const UserContext= createContext(null);

function App() {
  const[user, setUser] =useState();
  return (
    <BrowserRouter>
    <UserContext.Provider value={{user,setUser}}>
      <Routes>
       <Route path="/repairs/tirepressure" element={<TirePressure/>} />
       <Route path="/repairs/oil" element={<Oil/>} />
       <Route path="/repairs/battery" element={<Battery/>} />
       <Route path="/repaircard" element={<RepairCard />} />
       <Route path="/" element={<Landing/>} />
      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    
    
  );
}

export default App;
