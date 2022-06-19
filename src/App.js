import {useState, createContext} from "react";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import RepairCard from './components/RepairCard';
import {Oil} from './Pages/Oil';
import {Battery}  from './Pages/Battery';
import {TirePressure }from './Pages/TirePressure'
import Landing from './components/Landing'
import {Login} from './components/Login'
import { SignUp } from "./components/SignUp";
// import '~antd/dist/antd.css';



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
       <Route path="/login" element={<Login/>} />
       <Route path="/signup" element={<SignUp/>} />

      </Routes>
    </UserContext.Provider>
    </BrowserRouter>
    
    
  );
}

export default App;
