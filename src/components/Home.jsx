import React, { useEffect, useState } from 'react';
import ArticlesList from './ArticlesList';
import axios from 'axios';
import ConsultarFiltro from './ConsultaFiltro';

function Home() {
    const [lista, setLista] = useState([]);

    useEffect(() => {
        // Función para cargar todos los artículos al cargar el componente
        const consultarArticulos = async () => {
            try {
                const resultado = await axios.get('http://localhost:8080/api/articulo');
                setLista(resultado.data); // Actualizar el estado con los datos de la API
            } catch (error) {
                console.error('Error al cargar artículos:', error);
            }
        };
        
        consultarArticulos(); // Llamar a la función al montar el componente
    }, []);

    const onConsultar = async (numero) => {
        try {

            let resultado;
            if (numero) {
                resultado = await axios.get(`http://localhost:8080/api/articulo/${numero}`);
                setLista([resultado.data]); // Actualizar el estado con el artículo consultado
            } else {
                resultado = await axios.get('http://localhost:8080/api/articulo');
                setLista(resultado.data); // Actualizar el estado con todos los artículos
            }
        } catch (error) {
            console.error('Error al consultar artículo:', error);
        }
    };

    return (
        <>
            <h3>Formulario de Búsqueda</h3>
            <div className="row">
                <div className="col-12">
                    <ConsultarFiltro onData={onConsultar} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ArticlesList items={lista} />
                </div>
            </div>
        </>
    );
}

export default Home;
