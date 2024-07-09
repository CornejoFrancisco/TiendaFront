import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import PaginaPrincipal from './components/PaginaPrincipal';

function App() {
  return (
    <Router>
      <div>

        <Routes>
          <Route path="/" element={<PaginaPrincipal />} /> {/* Ejemplo: define la ruta para Home */}
          {/* Define otras rutas aquí usando Route */}
          <Route path="*" element={<PaginaPrincipal />} />
        
        </Routes>

      </div>
    </Router>
  );
}

export default App;
