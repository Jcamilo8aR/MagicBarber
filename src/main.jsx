import React from 'react'
import ReactDOM from 'react-dom/client'
import { Servicios } from './Servicios/Servicios'
import { Empleados } from './Empleados/Empleados'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Servicios/>
  </React.StrictMode>,
)
