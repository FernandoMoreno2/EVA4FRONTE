import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate(); 
  const imgStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  };


  const goToEventos = () => {
    navigate('/eventos');
  };

  return (
    <div>


      <section id="eventos" className="container mt-5">
        <h2 className="text-neon">Eventos Destacados</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div 
              className="card bg-dark text-white"
              onClick={goToEventos}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUGVfnKHt4FCo9RQ2QYl_MMj_YYjZJT2anA&s" 
                style={imgStyle} 
                alt="Evento 1" 
              />
              <div className="card-body">
                <h5 className="card-title">Fiesta Retro</h5>
                <p className="card-text">¡Ven a nuestra fiesta retro con los mejores éxitos de los 80s!</p>
                <p className="card-text"><small className="text-muted">Fecha: 30 de Julio, 22:00</small></p>
                <p className="card-text"><small className="text-muted">Contador: 5 días para el evento</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div 
              className="card bg-dark text-white"
              onClick={goToEventos}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbeRLuAbh93b4HDVjxVM1Ded7SAWugrdjbfA&s" 
                style={imgStyle} 
                alt="Evento 2" 
              />
              <div className="card-body">
                <h5 className="card-title">Noche de Neon</h5>
                <p className="card-text">¡Disfruta de una noche llena de luces neón y música electrónica!</p>
                <p className="card-text"><small className="text-muted">Fecha: 15 de Agosto, 23:00</small></p>
                <p className="card-text"><small className="text-muted">Contador: 27 días para el evento</small></p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div 
              className="card bg-dark text-white"
              onClick={goToEventos}
              style={{ cursor: 'pointer' }}
            >
              <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGx0MuCeXlXKUM71gLPAQB0Wt6YTIOOebkgg&s" 
                style={imgStyle} 
                alt="Evento 3" 
              />
              <div className="card-body">
                <h5 className="card-title">Gran Concierto</h5>
                <p className="card-text">¡Una noche llena de luces y música electrónica!</p>
                <p className="card-text"><small className="text-muted">Fecha: 22 de Septiembre, 18:00</small></p>
                <p className="card-text"><small className="text-muted">Contador: 67 días para el evento</small></p>
              </div>
            </div>
          </div>
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
