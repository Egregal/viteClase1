import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('hola');

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>Escribiste: {text}</p>
      <button onClick={() => setText('hola')}>
        Reiniciar
      </button>
    </>
  );
}