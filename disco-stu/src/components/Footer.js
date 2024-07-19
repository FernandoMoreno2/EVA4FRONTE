import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-center text-white mt-5 p-4">
      <p>Contacto: info@discostu.cl | Tel: +569 8484 9595</p>
      <p>Síguenos en:
        <span className="text-neon ml-2"><i className="fab fa-facebook-f"></i></span>
        <span className="text-neon ml-2"><i className="fab fa-instagram"></i></span>
        <span className="text-neon ml-2"><i className="fab fa-twitter"></i></span>
      </p>
      <form id="newsletter" className="form-inline justify-content-center">
        <input type="email" className="form-control" placeholder="Suscríbete al boletín" />
        <button type="submit" className="btn btn-neon ml-2">Suscribirse</button>
      </form>
    </footer>
  );
}

export default Footer;
