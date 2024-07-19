import React from 'react';


const eventos = [
  {
    id: 1,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUGVfnKHt4FCo9RQ2QYl_MMj_YYjZJT2anA&s', 
    titulo: 'Fiesta Retro',
    descripcion: '¡Ven a disfrutar de la mejor música de los 80s con DJ Flashback!',
  },
  {
    id: 2,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeRLuAbh93b4HDVjxVM1Ded7SAWugrdjbfA&s', 
    titulo: 'Noche de Salsa',
    descripcion: 'Baila salsa toda la noche con la mejor orquesta en vivo.',
  },
  {
    id: 3,
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx0MuCeXlXKUM71gLPAQB0Wt6YTIOOebkgg&s', 
    titulo: 'Electro Dance',
    descripcion: 'Sumérgete en la música electrónica con los DJs más populares.',
  },
];

function Home() {
  return (
    <div>
      <section id="eventos" className="container mt-5">
        <div className="row">
          {eventos.map(evento => (
            <div key={evento.id} className="col-md-4 mb-4">
              <div className="card bg-dark text-white">
                <img 
                  src={evento.imagen} 
                  alt={evento.titulo} 
                  className="card-img-top" 
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body">
                  <h5 className="card-title">{evento.titulo}</h5>
                  <p className="card-text">{evento.descripcion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="promociones" className="container mt-5">
        <h2 className="text-neon">Promociones Especiales</h2>
        <div className="alert alert-info" role="alert">
          ¡Compra 2 entradas y obtén una gratis! Solo por esta semana.
        </div>
        <div className="alert alert-success" role="alert">
          Descuento del 20% en todas las bebidas durante la noche.
        </div>
      </section>
    </div>
  );
}

export default Home;

