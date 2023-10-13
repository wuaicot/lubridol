import React from 'react';
import { Link } from 'react-router-dom';
import P1 from "../assets/image/Producto.jpg";

function InfoView() {
  return (
    <div  class="relative  h-screen bg-purple-200">
      <nav className="bg-blue-500 p-4">
        <Link to="/main" className="text-white px-4">Inicio</Link>
        {/* <Link to="/info" className="text-white px-4">Información</Link> */}
        <Link to="/contact" className="text-white px-4">Contacto</Link>
        <Link to="/buy" class="text-white px-4">Comprar</Link>
      </nav>

      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">

          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white"> "Aqui va la composición del producto" </h1>
            <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">Lubridol</p>
          </div>

          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img src={P1} alt="foto del producto" className="w-full h-70 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full" loading="lazy" />
            <img src="/beach-house-interior-1.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
            <img src="/beach-house-interior-2.jpg" alt="" className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32" loading="lazy" />
          </div>

          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">

            <dt className="sr-only">Reviews</dt>

            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg width="24" height="24" fill="none" aria-hidden="true" className="mr-1 stroke-current dark:stroke-indigo-500">
                <path d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <span>4.89 <span className="text-slate-400 font-normal">(128)</span></span>
            </dd>

            <dt className="sr-only">Location</dt>

            <dd className="flex items-center">
              <svg width="2" height="2" aria-hidden="true" fill="currentColor" className="mx-3 text-slate-300">
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="mr-1 text-slate-400 dark:text-slate-500" aria-hidden="true">
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Viña del mar, Chile
            </dd>            
          </dl>

          <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <button type="button" className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg">Ver disponibilidad</button>
          </div>

          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
          Introduciendo <span class="pl-3 pt-2 pr-3 pb-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-blue-950">Lubridol</span> la solución probáda para tus articulaciones. Nuestro producto natural espacial ha sido diseñado para lubricar tus articulaciones y aliviar el dolor de manera efectiva. Con ingredientes puros y científicamente probados, <span class="pl-3 pt-2 pr-3 pb-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-blue-950">Lubridol</span> es la clave para una movilidad sin límites. ¡Di adiós al dolor y descubre la comodidad de un cuerpo en armonía!
          </p>

        </div>
        <br />
        <br />
        <hr class="bg-black" />
      </main>
    </div>
  );
}

export default InfoView;
