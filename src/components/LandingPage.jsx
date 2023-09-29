import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    
    <div className="bg-orange-300 h-screen flex flex-col justify-center items-center">
     
      <h1 className="text-4xl font-bold mb-4">¡Bienvenido a Lubridol!</h1>
      <Link to="/main" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
        Ingresar
      </Link>

      
      
    </div>
      
  );
  
}

export default LandingPage;

