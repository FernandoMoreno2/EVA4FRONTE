import React from 'react';

function Registro() {
  return (
    <div className="container mt-5">
      <h2 className="text-neon">Registrarse</h2>
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
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="Tu contraseña" />
        </div>
        <button type="submit" className="btn btn-neon">Registrarse</button>
      </form>
    </div>
  );
}

export default Registro;
