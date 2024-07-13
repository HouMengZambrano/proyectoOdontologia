// import React from 'react'
import filosofiaImg from "../assets/image1.png"
import '../sytles/FilosofiaArticle.css'

const FilosofiaArticle = () => {
  return (
    <div className='filosofiaArticle'>
      <div className="filosofiaArticle-text-container">
        <h2>Filosofia de Trabajo</h2>
        <h3>Empatía, Ciencia y Arte en un Solo Lugar</h3>
        <p>
        "Proveniente de una familia dedicada al servicio de la salud, siempre he creído en combinar mi pasión por la salud y el arte en una destreza manual para brindar cuidados de calidad. Con paciencia, empatía y un enfoque centrado en ti, trabajo para diseñar tratamientos personalizados y ofrecer a mis pacientes sonrisas saludables y hermosas"
        </p>
      </div>
      <div className="filosofiaArticle-img-container">
        <img src={filosofiaImg} alt="imagen de filosofiahh"></img>
      </div>
        
    </div>
  )
}

export default FilosofiaArticle