import React from 'react';
import { Link } from 'react-router-dom';

function ContactView() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <Link to="/main" className="text-white px-4">Inicio</Link>
        <Link to="/info" className="text-white px-4">Información</Link>
        <Link to="/contact" className="text-white px-4">Contacto</Link>
      </nav>
      <div className="p-4">
        {/* Información de contacto del vendedor aquí */}
      </div>
    </div>
  );
}

export default ContactView;
