import React from 'react';
import { Link } from 'react-router-dom';
import FotoYenny from '../assets/image/Yenny_perfil464x630.png';
import LW from '../assets/image/logowhatsapp.png';
import HeroSocial from '../components/Heroasocial/HeroSocial.jsx';


const cellPhone= "https://api.whatsapp.com/send/?phone=56963108651&text&app_absent=0";

function ContactView() {
  return (
    <div class="relative overflow-hidden h-screen bg-purple-200">
      
      <nav class="bg-blue-900 p-4">
        <Link to="/main" class="text-white px-4">Inicio</Link>
        <Link to="/info" class="text-white px-4">Información del Producto</Link>
        {/* <Link to="/contact" class="text-white px-4">Contacto</Link> */}
      </nav>
      

      <div class="p-4 mt-10 pt-10">
        {/* Información de contacto del vendedor aquí */}
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
          
          <img class="w-28 h-28 rounded-sm mx-auto" src={FotoYenny} alt="Foto de Yenny" width="384" height="512" />
          <div class="pt-6 md:p-8 text-center space-y-4">
            <blockquote>
              <p class="text-lg font-medium">
                Hola 👋 quiero que pruebes 
              "Lubridol" La solución natural para el dolor articular. Recupere su movilidad y calidad de vida. Fórmula efectiva respaldada por laboratorio de confianza. ¡Adiós al dolor, hola a la libertad!"
              </p>
            </blockquote>
            <figcaption class="font-medium">
              <div class="text-sky-500 dark:text-sky-400">
                <h1>Yenny Guajardo</h1>
              </div>
              <div class="text-slate-700 dark:text-slate-500">
                Auxiliar de Farmacia, Ventas.

              </div>
            </figcaption>
          </div>
        </figure>
      </div>
         <div>
          <HeroSocial                
            src={LW}
            alt="phone-Sticker"
            title="+56963108651"
            header="WhatsApp"
            href={cellPhone}
            target="_blank"
            linkName="Enlace al Chat"
          />
          </div>
    </div>
  );
}

export default ContactView;
