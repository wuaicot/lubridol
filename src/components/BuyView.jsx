// BuyView.jsx
import React, { useState } from 'react';
import axios from 'axios'; // Asumiendo que estás utilizando axios para realizar solicitudes HTTP
import { Link } from 'react-router-dom';


const BuyView = () => {
  const [productQuantity, setProductQuantity] = useState(1);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [cardDetails, setCardDetails] = useState('');

  const handlePurchase = () => {
    // Aquí debes implementar la lógica para procesar el pago y enviar datos al backend
    // Esto incluye integración con los servicios de pago y validación de campos
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-lg bg-white">

        <nav class="bg-blue-900 p-4">
        <Link to="/main" class="text-white px-4">Inicio</Link>
        <Link to="/info" class="text-white px-4">Información del Producto</Link>
        <Link to="/contact" class="text-white px-4">Contacto</Link>
      </nav>

      <h1 className="py-9 text-2xl font-semibold text-center mb-4">Comprar Lubridol</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium">Cantidad del Producto:</label>
        <input
          type="number"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          value={productQuantity}
          onChange={(e) => setProductQuantity(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Nombre:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Dirección:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Información de Contacto:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          value={contactInfo}
          onChange={(e) => setContactInfo(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Detalles de la Tarjeta:</label>
        <input
          type="text"
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          value={cardDetails}
          onChange={(e) => setCardDetails(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium">Método de Pago:</label>
        <select
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-indigo-500"
          onChange={(e) => setPaymentMethod(e.target.value)}
        >
          <option value="onepay">OnePay</option>
          <option value="paypal">PayPal</option>
          <option value="transferencia">Transferencia Bancaria</option>
        </select>
      </div>
      <button
        className="w-full px-4 py-2 bg-indigo-700 text-white rounded-lg hover:bg-yellow-400 hover:text-indigo-700 transition duration-300"
        onClick={handlePurchase}
      >
        Comprar
      </button>
    </div>
  );
  
  
};

export default BuyView;
