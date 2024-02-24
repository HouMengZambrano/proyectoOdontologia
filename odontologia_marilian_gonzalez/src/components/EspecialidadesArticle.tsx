import React from 'react'
import EspecialidadBoton from './EspecialidadBoton'
import "../sytles/EspecialidadesArticle.css"


const EspecialidadesArticle = () => {
  return (
    <div className='especialidadesArticle'>
        <h2>Especialidades</h2>
    <div className='especialidadesBotones'>
    
    <EspecialidadBoton  nombre = "Odontologia General" targetId='1'/>
    <EspecialidadBoton  nombre = "Cirugia Bucal" targetId='2'/>
    <EspecialidadBoton  nombre = "Ortodoncia" targetId='3'/>
    <EspecialidadBoton  nombre = "Estetica y Rehabilitacion" targetId='4'/>
    <EspecialidadBoton  nombre = "Implatología" targetId='5'/>
    </div>
    </div>
  )
}

export default EspecialidadesArticle