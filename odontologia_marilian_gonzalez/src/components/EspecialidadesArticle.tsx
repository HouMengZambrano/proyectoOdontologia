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
    <EspecialidadBoton  nombre = "Ortodoncia y Rehabilitacion" targetId='3'/>
    <EspecialidadBoton  nombre = "Estetica y Blanquiamiento Dentales" targetId='4'/>
    <EspecialidadBoton  nombre = "Odontopediatria" targetId='5'/>
    <EspecialidadBoton  nombre = "Endodoncia" targetId='6'/>
    <EspecialidadBoton  nombre = "Implantología" targetId='7'/>
    </div>
    </div>
  )
}

export default EspecialidadesArticle