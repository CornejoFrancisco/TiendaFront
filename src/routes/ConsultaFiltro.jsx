import React, { useState } from 'react'

export default function ConsultarFiltro( { onData }) {
    const [filtro, setFiltro] = useState([])

    const handleSubmit = (event) => {
        event.preventDefault();
        onData(filtro)
  

    }
    return (
        <div className="col-12">
          <form onSubmit={handleSubmit}>
            <div className="mb-3 d-flex">
              <input
                type="text"
                placeholder="Descripcion"
                className="form-control me-2"
                onChange={(event) => { setFiltro(event.target.value); }}
              />
              <button type="submit" className="btn btn-primary">
                Buscar
              </button>
            </div>
          </form>
        </div>
      );
      
}