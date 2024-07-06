import React from 'react';
import { Card } from 'react-bootstrap';
import Card_Articulo from './CardArticulo'; // Asegúrate de importar correctamente el componente CardArticulo

const articlesData = [
  { id: 1, title: 'Artículo 1', description: 'Descripción del artículo 1' },
  { id: 2, title: 'Artículo 2', description: 'Descripción del artículo 2' },
  { id: 3, title: 'Artículo 3', description: 'Descripción del artículo 3' },
  { id: 1, title: 'Artículo 1', description: 'Descripción del artículo 1' },
  { id: 2, title: 'Artículo 2', description: 'Descripción del artículo 2' },
  { id: 3, title: 'Artículo 3', description: 'Descripción del artículo 3' },
  { id: 1, title: 'Artículo 1', description: 'Descripción del artículo 1' },
  { id: 2, title: 'Artículo 2', description: 'Descripción del artículo 2' },
  { id: 3, title: 'Artículo 3', description: 'Descripción del artículo 3' },
  { id: 1, title: 'Artículo 1', description: 'Descripción del artículo 1' },
  { id: 2, title: 'Artículo 2', description: 'Descripción del artículo 2' },
  { id: 3, title: 'Artículo 3', description: 'Descripción del artículo 3' },
  { id: 1, title: 'Artículo 1', description: 'Descripción del artículo 1' },
  { id: 2, title: 'Artículo 2', description: 'Descripción del artículo 2' },
  { id: 3, title: 'Artículo 3', description: 'Descripción del artículo 3' },

  // Agrega más datos de artículos según sea necesario
];

const ArticlesList = () => {
  return (
    <div className="container">
      <div className="row">
        {articlesData.map(article => (
          <div key={article.id} className="col-md g-4">
            <Card_Articulo title={article.title} description={article.description} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArticlesList;
