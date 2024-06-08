// import React from 'react'
import EspecialidadBoton from './EspecialidadBoton'
import "../sytles/EspecialidadesArticle.css"


const EspecialidadesArticle = () => {
  return (
    <div className='especialidadesArticle'>
        <h2>Especialidades</h2>
    <div className='especialidadesBotones'>
    
    <EspecialidadBoton  nombre = "Odontologia General" targetId='1'/>
    <EspecialidadBoton  nombre = "Ortodoncia y Ortopedia" targetId='2'/>
    <EspecialidadBoton  nombre = "Cirugía Bucal" targetId='3'/>
    <EspecialidadBoton  nombre = "Estetica y Blanquiamientos" targetId='4'/>
    <EspecialidadBoton  nombre = "Rehabilitación e Implantología" targetId='5'/>
    <EspecialidadBoton  nombre = "Odontopediatria" targetId='6'/>
    <EspecialidadBoton  nombre = "Endodoncia" targetId='7'/>
    </div>
    </div>
  )
}

export default EspecialidadesArticle