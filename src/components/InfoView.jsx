import React from 'react';
import { Link } from 'react-router-dom';

function InfoView() {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <Link to="/main" className="text-white px-4">Inicio</Link>
        <Link to="/info" className="text-white px-4">Información</Link>
        <Link to="/contact" className="text-white px-4">Contacto</Link>
      </nav>
      <div className="p-4">
        {/* Contenido de información y enlaces relacionados aquí */}
      </div>
    </div>
  );
}

export default InfoView;
