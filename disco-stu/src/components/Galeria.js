import React from 'react';

const fotos = [
  { id: 1, src: '/assets/esostu.jpg', alt: 'Fiesta Retro' },
  { id: 2, src: '/assets/stu.jpg', alt: 'Noche de Neon' },
  { id: 3, src: '/assets/musicstu.jpg', alt: 'Fiesta Retro' },
  { id: 4, src: '/assets/nostu.jpg', alt: 'Noche de Neon' },
  { id: 5, src: '/assets/partybig.jpg', alt: 'Fiesta Retro' },
  { id: 6, src: '/assets/images.jpg', alt: 'Noche de Neon' },
];

function Galeria() {
  return (
    <div className="container mt-5">
      <h2 className="text-neon">Galería de Fotos</h2>
      <div className="row">
        {fotos.map(foto => (
          <div className="col-md-4 mb-3" key={foto.id}>
            <div className="card bg-dark text-white">
              <img src={foto.src} className="card-img-top" alt={foto.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Galeria;
