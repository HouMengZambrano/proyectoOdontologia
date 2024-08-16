import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Contacto from './Contacto.tsx'
import Especialidad from './Especialidades.tsx'
import { SobreMi } from './SobreMi.tsx'
import ScrollToTop from './components/ScrollToTop.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollToTop>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
          <Route path="/especialidad" element={<Especialidad/>}/>
          <Route path="/sobremi" element={<SobreMi/>}/>
      </Routes>
    </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>,
)
