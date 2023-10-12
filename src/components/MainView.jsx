import React from 'react';
import { Link } from 'react-router-dom';
import ProductImage from '../assets/image/Producto.jpg';
import ProductImageII from '../assets/image/Product_II.jpg';
import ProductImageIII from '../assets/image/Product_III.jpg';




function MainView() {
  return (
    <div>
      <nav class="bg-blue-900 p-4">
        {/* <Link to="/main" class="text-white px-4">Inicio</Link> */}
        <Link to="/info" class="text-white px-4">Información del Producto</Link>
        <Link to="/contact" class="text-white px-4">Contacto</Link>
      </nav>      
          
      
      <div class="relative overflow-hidden bg-purple-200">
      <div class="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
          <div class="sm:max-w-lg ">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pl-3  border-solid border-yellow-700 rounded-md">
              ¡Toma <span class="pl-3 pt-2 pr-3 pb-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-blue-950">Lubridol</span> y muevete sin dolor!
            </h1>
            <h2 class="mt-4 text-xl text-gray-500 indent-8">
            Esta año un nuevo producto natural te cuidará de las duras condiciones del padecimiento articular y te ayudará a recuperar la movilidad para un día a día más productivo.
            </h2>
          </div>
          <div>
            <div class="mt-12">
              
              <div
                aria-hidden="true"
                class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ">

                  <div class="flex items-center space-x-6 lg:space-x-8 ">

                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">

                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">

                      <img
                          src={ProductImage}
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />

                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg ">
                        
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                      <div class="h-54 w-44 overflow-hidden rounded-lg">
                        
                      <img
                          src={ProductImageII}
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      
                      <div class="h-64 w-44 overflow-hidden rounded-lg ">
                        <img
                          src={ProductImageIII}
                          alt=""
                          class="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg ">
                        
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>

              <a
                href="#"
                class="inline-block rounded-md border border-solid border-2 border-indigo-600 bg-yellow-400 px-10 py-2 text-center font-medium text-white text-xl hover:bg-indigo-700 hover:text-white"
              >
                Comprar    
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </div>
      
    </div>
  );
}

export default MainView;
