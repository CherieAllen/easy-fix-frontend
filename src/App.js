import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import RepairCard from './components/RepairCard';
import RepairList from './components/RepairList';
import { RepairPage} from './Pages/RepairPage';
import Comments from './components/Comments'


function App() {
  return (
    <BrowserRouter>
    <header>
      <h1>Easy Fix App</h1>
    </header>
      <Routes>
       <Route path="/repairs/:repairID" element={<RepairPage/>} />
       <Route path="/" element={<RepairList />} />
      </Routes>
      <Comments comment/>
    </BrowserRouter>
    
    
  );
}

export default App;
