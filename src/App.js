import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taller1 from './pages/Taller1';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Tarea1" element={<Taller1/>}/>
      <Route path="/Taller1" element={<Taller1/>}/>
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
