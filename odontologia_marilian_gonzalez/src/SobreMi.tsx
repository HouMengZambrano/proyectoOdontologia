import React from 'react'
import sobreMiImg from './assets/image1.png'
import Header from './components/Header'
import Footer from './components/Footer'
import './sytles/SobreMi.css'

export const SobreMi = () => {
  return (
    <div>
    <Header/>
    <div className='sobreMi'>
    <div className ='sobreMiArticle'>
      <img src={sobreMiImg} alt ="sobremiImg"></img>
        <h3>Odontologa Marilian Gonzales</h3>
        <h3>Especialista en Ortodoncia y Estetica dental</h3>
        <p>
        "Graduada de la Universidad de los Andes en Venezuela, mi compromiso con la excelencia en odontología ha sido una constante en mi carrera. Me especialicé en cirugía bucal y ortodoncia en la misma universidad, y luego continué mi formación en estética dental en la Fundación Creo de la Provincia de Córdoba, Argentina. He dedicado mi vida profesional a perfeccionar mis habilidades para ofrecerte los mejores tratamientos dentales. Actualmente, me encuentro realizando una especialización en implantes y rehabilitación dental en el prestigioso Centro Odontológico Dr. Gustavo Chiterer en la Ciudad Autónoma de Buenos Aires."
        </p>
    </div>
    </div>
    <Footer/>
    </div>
  )
}
