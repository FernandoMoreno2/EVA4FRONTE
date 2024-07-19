import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand text-neon" to="/">Disco Stu's Dance Palace</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className="nav-link text-neon" to="/">Inicio</Link></li>
          <li className="nav-item"><Link className="nav-link text-neon" to="/eventos">Eventos</Link></li>
          <li className="nav-item"><Link className="nav-link text-neon" to="/galeria">Galería</Link></li>
          <li className="nav-item"><Link className="nav-link text-neon" to="/blog">Blog</Link></li>
          <li className="nav-item"><Link className="nav-link text-neon" to="/contacto">Contacto</Link></li>
          <li className="nav-item"><Link className="nav-link text-neon" to="/login">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
