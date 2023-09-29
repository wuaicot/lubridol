import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="relative h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline // Agregar esto
      >
        <source src="/video/production_id_3866584_(1080p).mp4" type="video/mp4" />
        Tu navegador no admite la reproducción de video.
      </video>
       
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-80">
      </div>

      <div className="h-screen flex flex-col justify-center items-center relative z-10">
        <h1 className="text-4xl font-bold text-blue-navy mb-4">¡Conozca Lubridol!</h1>
        <p className="text-lg text-blue-navy mb-8">
          La solución para el dolor articular.
        </p>
        <Link
          to="/main"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Ingresar
        </Link>
        <audio autoPlay loop>
          <source src="/audio/AgeOfGods.mp3" type="audio/mp3" />
          Tu navegador no admite la reproducción de audio.
        </audio>
      </div>
    </div>
  );
}

export default LandingPage;
