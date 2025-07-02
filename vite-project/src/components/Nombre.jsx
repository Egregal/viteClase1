import { useState } from 'react';

function Nombre() {
  const [nombre, setNombre] = useState('');

  function handleChange(event) {
    setNombre(event.target.value);
  }

  return (
    <div>
      <input type='text' placeholder='Nombre' value={nombre} onChange={handleChange} />
      <p>Hola : {nombre}</p>
    </div>
  );
}

export default Nombre;

