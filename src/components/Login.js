import React from 'react';

function Login() {
  return (
    <div className="container mt-5">
      <h2 className="text-neon">Iniciar Sesión</h2>
      <form>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Tu email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input type="password" className="form-control" id="password" placeholder="Tu contraseña" />
        </div>
        <button type="submit" className="btn btn-neon">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
