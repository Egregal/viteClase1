import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MyInput from './components/texto.jsx'
import Mensaje from './components/Mensaje.jsx'
import Nombre from './components/Nombre.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyInput />
    <Mensaje />
    <Nombre />
  </StrictMode>,
)
