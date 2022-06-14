import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import RepairCard from './components/RepairCard';
import {Oil} from './Pages/Oil';
import {Battery}  from './Pages/Battery';
import {TirePressure }from './Pages/TirePressure'



function App() {
  return (
    <BrowserRouter>
    <header>
      <h1>Easy Fix</h1>
    </header>
      <Routes>
       <Route path="/repairs/tirepressure" element={<TirePressure/>} />
       <Route path="/repairs/oil" element={<Oil/>} />
       <Route path="/repairs/battery" element={<Battery/>} />
       <Route path="/" element={<RepairCard />} />
      </Routes>
      
    </BrowserRouter>
    
    
  );
}

export default App;
