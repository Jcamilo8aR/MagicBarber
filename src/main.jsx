import React from 'react'
import ReactDOM from 'react-dom/client'
import {Menu} from './shared/Menu/Menu'
import { Footer } from './shared/Footer/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-icons/font/bootstrap-icons.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Menu/>
    <Footer/>
  </React.StrictMode>,
)
