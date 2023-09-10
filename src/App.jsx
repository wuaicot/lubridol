// App.jsx
import React, { useState } from 'react';
import NewComponent from './component/NewComponent'; 

function App() {
  const [showNewComponent, setShowNewComponent] = useState(false);

  const handleButtonClick = () => {
    setShowNewComponent(true);
  };

  return (
    <div>
      <div className="bg-lime-500 rounded-s-sm border-double border-2 border-cyan-500">
        <p className="text-white">Hello World</p>
      </div>
      
      {/* Botón para mostrar el nuevo componente */}
      <button onClick={handleButtonClick}>Mostrar Nuevo Componente</button>

      {/* Renderiza el nuevo componente si showNewComponent es true */}
      {showNewComponent && <NewComponent />}
    </div>
  );
}

export default App;
