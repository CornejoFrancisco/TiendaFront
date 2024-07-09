// PaginaPrincipal.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../contexts/Header';
import Home from '../contexts/Home';
import Footer from '../contexts/Footer';

export default function PaginaPrincipal() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        const consultarArticulos = async () => {
            try {
                const resultado = await axios.get('http://localhost:8080/api/articulo');
                setLista(resultado.data); 
                console.log("Artículos cargados:", resultado.data);
            } catch (error) {
                console.error('Error al cargar artículos:', error);
            }
        };
        
        consultarArticulos(); 
    }, []);

    const onConsulta = async (filtro) => {
        try {
            let resultado;
            if (filtro) {
                resultado = await axios.get(`http://localhost:8080/api/articulo/${filtro}`);
                console.log("Artículos filtrados:", resultado.data);
                setLista(resultado.data);
            } else {
                resultado = await axios.get('http://localhost:8080/api/articulo');
                console.log("Artículos cargados:", resultado.data);
                setLista(resultado.data);
            }
    
            // Si no se encuentran elementos, establecer lista como un array vacío
            if (resultado) {
                setLista(resultado.data);
            } else {
                setLista([]);
            }
        } catch (error) {
            console.error('Error al consultar artículo:', error);
            setLista([]); // En caso de error, también se establece la lista como un array vacío
        }
    };
    
    return (
        <div>
            <Header onData={onConsulta} /> 
            <Home items={lista} /> 
            <Footer />
        </div>
    );
}
