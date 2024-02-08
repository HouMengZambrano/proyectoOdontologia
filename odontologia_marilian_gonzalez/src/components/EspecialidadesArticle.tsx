import React from 'react'
import EspecialidadBoton from './EspecialidadBoton'
import "../sytles/EspecialidadesArticle.css"

const EspecialidadesArticle = () => {
  return (
    
    <div className='especialidadesArticle'>
        <h2>Especialidades</h2>
    <div className='especialidadesBotones'>
    <EspecialidadBoton/>
    <EspecialidadBoton/>
    <EspecialidadBoton/>
    <EspecialidadBoton/>
    <EspecialidadBoton/>
    </div>
    </div>
  )
}

export default EspecialidadesArticle