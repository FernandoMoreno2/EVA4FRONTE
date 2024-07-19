import React from 'react';

const articulos = [
  { id: 1, titulo: 'La Historia de la Música Disco', contenido: 'Explora la historia de la música disco desde sus inicios hasta la actualidad.', fecha: '15 de Julio, 2024' },
  { id: 2, titulo: 'Tendencias de Discoteca 2024', contenido: 'Conoce las últimas tendencias en discotecas y cómo Disco Stu está marcando la pauta.', fecha: '10 de Julio, 2024' },
  { id: 3, titulo: 'Noche de Estrellas del Disco', contenido: 'Una noche especial con actuaciones en vivo de los más grandes artistas del género disco.', fecha: '20 de Julio, 2024' },
  { id: 4, titulo: 'Fiebre de los 70s', contenido: 'Revive la fiebre de los años 70 con música, moda y cultura disco.', fecha: '25 de Julio, 2024' },
  { id: 5, titulo: 'Concurso de Bailes Retro', contenido: 'Participa en nuestro concurso de bailes retro y muestra tus mejores movimientos de disco.', fecha: '30 de Julio, 2024' },
  { id: 6, titulo: 'Fiesta de Reencuentro Disco', contenido: 'Celebra con nosotros una fiesta de reencuentro con la mejor música disco de todos los tiempos.', fecha: '5 de Agosto, 2024' },
  { id: 7, titulo: 'Cultura Disco en la Moda', contenido: 'Descubre cómo la moda disco de los años 70s sigue influyendo en el estilo actual.', fecha: '10 de Agosto, 2024' },
  { id: 8, titulo: 'Tarde de Cine Disco', contenido: 'Disfruta de una tarde de películas clásicas de la época disco y revive los mejores momentos de ese tiempo.', fecha: '15 de Agosto, 2024' }
];


function Blog() {
  return (
    <div className="container mt-5">
      <h2 className="text-neon">Blog de Disco Stu</h2>
      {articulos.map(articulo => (
        <div className="card bg-dark text-white mb-3" key={articulo.id}>
          <div className="card-body">
            <h5 className="card-title">{articulo.titulo}</h5>
            <p className="card-text">{articulo.contenido}</p>
            <p className="card-text"><small className="text-muted">Fecha: {articulo.fecha}</small></p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Blog;
