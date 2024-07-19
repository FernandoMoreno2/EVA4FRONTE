import React from 'react';
import { useParams } from 'react-router-dom';

const eventos = [
  { id: 1, nombre: 'Fiesta Retro', descripcion: '¡Ven a nuestra fiesta retro con los mejores éxitos de los 80s!', fecha: '30 de Julio', hora: '22:00', lugar: 'Disco Stu\'s Dance Palace', artistas: 'DJ Retro', video: 'https://www.youtube.com/embed/5cft7R_L8W0' },
  { id: 2, nombre: 'Noche de Neon', descripcion: '¡Disfruta de una noche llena de luces neón y música electrónica!', fecha: '15 de Agosto', hora: '23:00', lugar: 'Disco Stu\'s Dance Palace', artistas: 'DJ Neon', video: 'https://www.youtube.com/embed/4b5s7_Eq6hU' },
];

function EventoDetalle() {
  const { id } = useParams();
  const evento = eventos.find(e => e.id === parseInt(id));

  if (!evento) return <div>Evento no encontrado</div>;

  return (
    <div className="container mt-5">
      <h2 className="text-neon">{evento.nombre}</h2>
      <div className="card bg-dark text-white mb-3 eventos-destacados"> {}
        <div className="card-body">
          <p className="card-text">{evento.descripcion}</p>
          <p className="card-text"><small className="text-muted">Fecha: {evento.fecha}</small></p>
          <p className="card-text"><small className="text-muted">Hora: {evento.hora}</small></p>
          <p className="card-text"><small className="text-muted">Lugar: {evento.lugar}</small></p>
          <p className="card-text"><small className="text-muted">Artistas: {evento.artistas}</small></p>
          <div className="embed-responsive embed-responsive-16by9 mt-3">
            <iframe 
              className="embed-responsive-item" 
              src={evento.video} 
              allowFullScreen 
              title={`Video de ${evento.nombre}`} 
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventoDetalle;
