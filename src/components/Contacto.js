import React from 'react';

function Contacto() {
  return (
    <div className="container mt-5">
      <h2 className="text-neon">Contacto</h2>
      <form>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" className="form-control" id="nombre" placeholder="Tu nombre" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Tu email" />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje</label>
          <textarea className="form-control" id="mensaje" rows="4" placeholder="Tu mensaje"></textarea>
        </div>
        <button type="submit" className="btn btn-neon">Enviar</button>
      </form>
    </div>
  );
}

export default Contacto;
