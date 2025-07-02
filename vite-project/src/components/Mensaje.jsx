import { useState } from 'react';

export default function Mensaje() {
  const [mensaje, setMensaje] = useState({ value: 'Mensaje inicial' });

  return (
    <div>
      <p>{mensaje.value}</p>
      <button onClick={() => setMensaje({ ...mensaje, value: 'Mensaje Cambiado' })}>Cambiar Mensaje</button>
    </div>
  );
}

