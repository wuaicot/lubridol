import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ProductImage from '../assets/image/Producto.jpg';
import ProductImageII from '../assets/image/Product_II.jpg';

Modal.setAppElement('#root');

function MainView() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [showBuyError, setShowBuyError] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (isTermsAccepted) {
      // Si los términos han sido aceptados en el modal, el modal se cierra y permite la compra
      setShowBuyError(false);
    }
  };

  const handleCheckboxChange = () => {
    setIsCheckboxChecked(!isCheckboxChecked);
    setIsTermsAccepted(!isTermsAccepted);
    if (!isTermsAccepted) {
      // Muestra la advertencia si no se aceptan los términos y condiciones
      setShowBuyError(true);
    }
  };

  const handleBuyClick = () => {
    if (!isTermsAccepted) {
      // Si los términos no han sido aceptados, muestra la advertencia y abre el modal
      setShowBuyError(true);
      openModal();
    } else {
      // Realiza la acción de compra
      // Puedes redirigir al usuario a la página de compra u ejecutar la acción necesaria
    }
  };

  return (
    <div>
      <nav className="bg-blue-900 p-4">
        <Link to="/info" className="text-white px-4">
          Información del Producto
        </Link>
        <Link to="/contact" className="text-white px-4">
          Contacto
        </Link>
      </nav>

      <div className="relative overflow-hidden bg-purple-200">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40 ">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg ">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl pl-3 border-solid border-yellow-700 rounded-md">
                ¡Toma{' '}
                <span className="pl-3 pt-2 pr-3 pb-1.5 rounded-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-blue-950">
                  Lubridol
                </span>{' '}
                y muevete sin dolor!
              </h1>
              <h2 className="mt-4 text-xl text-gray-500 indent-8">
                Este año un nuevo producto natural te cuidará de las duras
                condiciones del padecimiento articular y te ayudará a recuperar
                la movilidad para un día a día más productivo.
              </h2>
            </div>
            <div>
              <div className="mt-12">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8 ">
                    <div className="flex items-center space-x-6 lg:space-x-8 ">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8 ">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100 ">
                          <img
                            src={ProductImage}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg "></div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-7 lg:gap-y-8 ">
                        <div className="h-54 w-44 overflow-hidden rounded-lg ml-3">
                          <img
                            src={ProductImageII}
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg "></div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg "></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start items-start -space-x-1">
                  <a
                    href="/buy"
                    className="inline-block rounded-bl-md rounded-br-md rounded-tl-md border border-solid border-2 border-blue-900 bg-yellow-400 px-10 py-2 text-center font-medium text-white text-xl hover-bg-white hover-text-yellow-400"
                    onClick={handleBuyClick}
                  >
                    <strong>Comprar</strong>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-full border-solid border-2 border-blue-900 w-12 h-12 bg-yellow-400 text-white hover-bg-white hover-text-yellow-400 -mt-10 mr-5"
                    onClick={openModal}
                  >
                    <i className="text-red-600 text-xl fas fa-info">i</i>
                  </a>
                </div>
                {showBuyError && (
                  <p className="text-red-500 text-sm mt-2">
                    Debes leer y aceptar los términos y condiciones antes de comprar.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cuadro de diálogo modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Información Importante"
        className="modal w-lg md:w-2/3 lg:w-1/2 xl:w-1/3 mx-auto p-4 my-8 bg-white rounded-lg shadow-lg text-center"
        overlayClassName="overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
      >
        <div className="modal-content">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Información Importante</h2>
          <p className="text-lg text-gray-700 mb-4">
            Aquí puedes mostrar la información importante. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
          <label className="flex items-center space-x-2 text-left mt-4">
            <input
              type="checkbox"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <span>Acepto los términos y condiciones.</span>
          </label>
          <a href="/contact" className="text-blue-500 text-sm mt-4">
            ¿Tienes alguna pregunta? Contáctanos.
          </a>
          <button
            className={`bg-yellow-400 text-white rounded-full px-4 py-2 transition duration-300 mt-4 ${
              !isTermsAccepted ? 'cursor-not-allowed' : 'hover-bg-white hover-text-yellow-400'
            }`}
            onClick={closeModal}
            disabled={!isTermsAccepted}
          >
            Cerrar
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default MainView;
