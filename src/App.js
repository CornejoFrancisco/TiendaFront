import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home'; // Ejemplo: importa el componente Home aquí

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<Home />} /> {/* Ejemplo: define la ruta para Home */}
          {/* Define otras rutas aquí usando Route */}
          <Route path="*" element={<Home />} />
        
        </Routes>

      </div>
    </Router>
  );
}

export default App;
