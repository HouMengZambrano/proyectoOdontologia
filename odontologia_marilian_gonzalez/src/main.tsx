import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './Contacto.tsx'
import Especialidad from './Especialidades.tsx'
import { SobreMi } from './SobreMi.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/especialidad" element={<Especialidad/>}/>
          <Route path="/sobremi" element={<SobreMi/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
