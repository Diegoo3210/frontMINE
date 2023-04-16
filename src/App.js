import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Taller1 from "./pages/Taller1";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Analis de Información"; // Change the title here
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Taller1" element={<Taller1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
